function toggleTheme() {
    const root = document.documentElement;

    root.dataset.theme =
        root.dataset.theme === "light"
        ? "dark"
        : "light";

    localStorage.setItem(
        "java-handbook-theme",
        root.dataset.theme
    );
}