/** localStorage key holding an explicit "light" | "dark" choice. */
export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint: applies a saved theme to <html data-theme>.
 * With no saved choice the attribute stays unset and CSS follows the OS setting.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;
