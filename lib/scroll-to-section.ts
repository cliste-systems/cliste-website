const MENU_EXIT_MS = 220;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  el.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  history.replaceState(null, "", `#${id}`);
  return true;
}

/** Close a full-screen menu, then smooth-scroll once the exit animation finishes. */
export function scrollToSectionAfterMenuClose(
  id: string,
  closeMenu: () => void,
) {
  closeMenu();
  window.setTimeout(() => scrollToSection(id), MENU_EXIT_MS);
}
