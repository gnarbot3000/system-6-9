// Shared rules for the /builds gallery. Parts ids match js/parts.js.
export const PART_IDS = ["pca1100", "hucp205", "petg", "flipsky80100", "amsteel50", "amsteel600", "weisen", "lovejoy", "housing"];
export const MAX_PENDING = 200;
export const RATE_PER_HOUR = 3;

function clean(v, max) {
  return String(v == null ? "" : v).replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function cleanNotes(v, max) {
  return String(v == null ? "" : v).replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);
}

// Only plain https links to an image; no credentials, no odd ports.
export function cleanImageUrl(v) {
  const s = clean(v, 500);
  if (!s) return "";
  let u;
  try {
    u = new URL(s);
  } catch {
    return null;
  }
  if (u.protocol !== "https:" || u.username || u.password || (u.port && u.port !== "443")) return null;
  return u.toString();
}

// Returns { build } or { error }.
export function validateBuild(p) {
  const name = clean(p?.name, 60);
  const by = clean(p?.by, 30);
  if (!name) return { error: "Give your build a name." };
  if (!by || !/^[\p{L}\p{N} ._'-]+$/u.test(by)) return { error: "Add a first name or handle (letters, numbers, . _ ' -)." };
  const image = cleanImageUrl(p?.image);
  if (image === null) return { error: "The photo link must start with https://" };
  const parts = Array.isArray(p?.parts) ? [...new Set(p.parts.filter((x) => PART_IDS.includes(x)))] : [];
  const other = clean(p?.other, 300);
  const notes = cleanNotes(p?.notes, 1500);
  if (!notes && !parts.length && !other) return { error: "Tell us a little about the build." };
  return { build: { name, by, image, parts, other, notes } };
}

export function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
