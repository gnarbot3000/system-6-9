/**
 * System 6.9 waitlist signup.
 * Forwards to FormSubmit → joel.hageman@gmail.com (first submit needs email confirm).
 */
const DEST = "joel.hageman@gmail.com";

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

  const form = new FormData();
  form.set("email", email);
  form.set("source", source || "system69");
  form.set("_subject", "System 6.9 — more info signup");
  form.set("_template", "table");
  form.set("_captcha", "false");

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${DEST}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: form,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return json(502, { error: "Could not save signup. Try again later." });
    }
    // FormSubmit returns success even when destination still needs activation
    return json(200, {
      message: "You’re on the list. We’ll be in touch.",
      detail: data?.success || data?.message || null,
    });
  } catch {
    return json(502, { error: "Could not save signup. Try again later." });
  }
}
