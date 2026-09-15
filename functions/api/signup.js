/**
 * System 6.9 waitlist — stores emails in Cloudflare KV (SYSTEM69_WAITLIST).
 */
function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    },
  });
}

export async function onRequestPost(context) {
  const kv = context.env.SYSTEM69_WAITLIST;
  if (!kv) {
    return json(500, { error: "Waitlist store not configured." });
  }

  let payload;
  try {
    payload = await context.request.json();
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const email = String(payload?.email || "").trim().toLowerCase();
  const source = String(payload?.source || "").slice(0, 120);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: "Enter a valid email." });
  }
  if (email.length > 200) {
    return json(400, { error: "Email too long." });
  }

  const key = `email:${email}`;
  const existing = await kv.get(key);
  const record = {
    email,
    source: source || "unknown",
    at: new Date().toISOString(),
    updated: Boolean(existing),
  };
  await kv.put(key, JSON.stringify(record));

  return json(200, {
    message: existing
      ? "You’re already on the list — we’ll be in touch."
      : "You’re on the list. We’ll be in touch.",
  });
}
