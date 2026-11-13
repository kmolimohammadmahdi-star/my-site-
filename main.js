/* Personal Brand — language toggle, mobile menu, filters, reveal animation */
(function () {
  "use strict";
  var root = document.documentElement;
  var KEY = "pb-lang";

  function getLang() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === "fa" || s === "en") return s;
    } catch (e) {}
    return "fa";
  }

  function applyLang(lang) {
    var dict = (window.I18N || {})[lang];
    if (!dict) return;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (dict[k] !== undefined) el.setAttribute("alt", dict[k]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] !== undefined) el.setAttribute("aria-label", dict[k]);
    });

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl && dict[titleEl.getAttribute("data-i18n")]) {
      document.title = dict[titleEl.getAttribute("data-i18n")];
    }
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  applyLang(getLang());

  var langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(root.lang === "fa" ? "en" : "fa");
    });
  }

  /* Mobile menu */
  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("nav-links");
  function closeMenu() {
    if (!menuBtn) return;
    menuBtn.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  }
  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
    });
    links.addEventListener("click", function (e) { if (e.target.tagName === "A") closeMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 960) closeMenu(); });
  }

  /* Notes filter */
  var filters = document.querySelectorAll(".filter");
  if (filters.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filters.forEach(function (b) { b.classList.toggle("active", b === btn); });
        document.querySelectorAll(".note").forEach(function (n) {
          n.hidden = !(f === "all" || n.getAttribute("data-cat") === f);
        });
      });
    });
  }

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
