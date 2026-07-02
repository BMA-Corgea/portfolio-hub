/* Portfolio Hub — minimal progressive enhancement.
   No dependencies. Safe to fail silently. */
(function () {
  "use strict";

  // Mark the current page's nav link as active.
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href]").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "index.html" && href === "./")) {
      a.classList.add("active");
    }
  });

  // Fill any [data-year] with the current year.
  var y = String(new Date().getFullYear());
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = y;
  });
})();
