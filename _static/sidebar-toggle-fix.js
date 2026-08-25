(() => {
  "use strict";

  const initialiseSidebarToggle = () => {
    const toggles = Array.from(document.querySelectorAll(".primary-toggle"));
    const themeToggle = toggles[0];

    if (!themeToggle) {
      return;
    }

    // PyData Sphinx Theme currently wires only the first toggle. Sphinx Book
    // Theme renders another toggle in the article header, which is the visible
    // hamburger. Forward clicks from any additional toggles to the wired one.
    toggles.slice(1).forEach((toggle) => {
      toggle.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          themeToggle.click();
        },
        true,
      );
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseSidebarToggle);
  } else {
    initialiseSidebarToggle();
  }
})();
