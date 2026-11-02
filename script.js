"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (!backToTopButton) return;

  function getScrollPosition() {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function updateBackToTopButton() {
    const shouldShow = getScrollPosition() > 500;
    backToTopButton.classList.toggle("is-visible", shouldShow);
    backToTopButton.setAttribute("aria-hidden", String(!shouldShow));
    backToTopButton.tabIndex = shouldShow ? 0 : -1;
  }

  window.addEventListener("scroll", updateBackToTopButton, { passive: true });
  window.addEventListener("pageshow", updateBackToTopButton);
  window.addEventListener("resize", updateBackToTopButton);

  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  updateBackToTopButton();
});
