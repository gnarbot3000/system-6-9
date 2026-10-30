// System 6.9 build guide checkout. Ships dark: paste Joel's hosted checkout URL
// (Lemon Squeezy or Gumroad, https) here once the account exists.
var GUIDE_CHECKOUT_URL = "";

(function () {
  var btn = document.getElementById("buy-guide");
  if (!btn) return;
  var url = /^https:\/\//.test(GUIDE_CHECKOUT_URL) ? GUIDE_CHECKOUT_URL : "";
  if (url) {
    btn.href = url;
    btn.textContent = "Get early access · $29";
    btn.addEventListener("click", function () {
      try {
        if (window.gtag) window.gtag("event", "begin_checkout", { value: 29, currency: "USD", transport_type: "beacon" });
      } catch (_) {}
    });
    return;
  }
  btn.href = "#signup";
  btn.textContent = "Opens soon: join the list above";
  btn.classList.add("soon");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var form = document.getElementById("signup");
    if (form) form.scrollIntoView({ behavior: "smooth", block: "center" });
    var email = document.getElementById("email");
    if (email) setTimeout(function () { email.focus({ preventScroll: true }); }, 400);
  });
})();
