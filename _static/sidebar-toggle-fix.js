(() => {
  "use strict";

  const forwardAdditionalToggles = (selector) => {
    const toggles = Array.from(document.querySelectorAll(selector));
    const themeToggle = toggles[0];

    if (!themeToggle) {
      return;
    }

    // PyData Sphinx Theme currently wires only the first toggle. Sphinx Book
    // Theme renders additional controls in the article header. Forward clicks
    // from those controls to the corresponding toggle wired by the theme.
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

  const initialiseSidebarToggles = () => {
    forwardAdditionalToggles(".primary-toggle");
    forwardAdditionalToggles(".secondary-toggle");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseSidebarToggles);
  } else {
    initialiseSidebarToggles();
  }
})();
