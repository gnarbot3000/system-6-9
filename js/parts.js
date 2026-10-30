// System 6.9 parts list. Amazon links stay untagged until Joel's Associates
// account exists; then put the tracking id here (e.g. "system69-20").
var AMAZON_TAG = "";

(function () {
  var PARTS = [
    { name: "Portable Winch PCA-1100 capstan drum (85 mm, with rope guide)", why: "The drum the loop wraps on, with a rope guide built in.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B004CXXE68" }, { store: "Portable Winch", url: "https://www.portablewinch.com/products/capstan-drums-with-rope-guide" }] },
    { name: "HUCP205 pillow blocks, 25 mm bore (2-pack)", why: "Carry the drive shaft. Same footprint as UCP205.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B08HJYZK1X" }] },
    { name: "PETG filament, 1.75 mm, 1 kg", why: "For the printed shaft and hub. Bench and empty-shuttle tests only.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B0DJS3PJVX" }] },
    { name: "80100 brushless motor, 130KV, 7 kW class (Flipsky)", why: "The bigger motor option for adult deep-water starts.",
      links: [{ store: "Flipsky", url: "https://flipsky.net/products/brushless-dc-motor-80100-130kv-7000w-for-electric-bike-electric-skateboard-go-cart" }] },
    { name: "Samson AmSteel-Blue 1/4\" x 50 ft", why: "Test lengths. Don't surge bare AmSteel on a capstan; use jacketed line or poly wraps on the drum.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B0B8MXRRM4" }] },
    { name: "Samson AmSteel-Blue 1/4\" x 600 ft spool", why: "Enough for the endless loop: about 2 x span plus the splice.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B06XJ6FTW3" }] },
    { name: "WeiSen 4-7/8\" 4-way roller fairlead", why: "Guides both strands onto the drum. Mount it long-axis vertical.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B0B2123T9Q" }] },
    { name: "Lovejoy L100 jaw coupling hub, 25 mm keyed", why: "One way to couple the motor to the drive shaft.",
      links: [{ store: "Amazon", url: "https://www.amazon.com/dp/B003HIWPS2" }] },
    { name: "3/4\" plywood, 3/8\"-16 Grade 5 bolts, Titebond II", why: "Housing. Any big-box store has these; the cut list is in the build guide.",
      links: [] }
  ];

  var tag = /^[a-z0-9-]{3,40}$/i.test(AMAZON_TAG) ? AMAZON_TAG : "";

  function withTag(u, store) {
    if (store !== "Amazon" || !tag) return u;
    return u + (u.indexOf("?") < 0 ? "?" : "&") + "tag=" + encodeURIComponent(tag);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var list = document.getElementById("parts-list");
  if (list) {
    list.innerHTML = PARTS.map(function (p) {
      var btns = p.links.map(function (l) {
        return '<a class="check" href="' + esc(withTag(l.url, l.store)) + '" target="_blank" rel="sponsored noopener noreferrer" data-store="' + esc(l.store) + '">Check price on ' + esc(l.store) + "</a>";
      }).join("");
      if (!btns) btns = '<span class="local">Local big-box store</span>';
      return '<li><h2>' + esc(p.name) + '</h2><p>' + esc(p.why) + '</p><div class="links">' + btns + "</div></li>";
    }).join("");
    list.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a.check") : null;
      if (!a) return;
      try {
        if (window.gtag) window.gtag("event", "affiliate_click", { network: a.getAttribute("data-store"), page: "parts", transport_type: "beacon" });
      } catch (_) {}
    });
  }

  var amz = document.getElementById("amazon-note");
  if (amz) amz.hidden = !tag;
})();
