let dark = false;

function toggleTheme() {
    dark = !dark;

    document.documentElement.style.setProperty(
        "--bg", dark ? "#0f172a" : "#ffffff"
    );
    document.documentElement.style.setProperty(
        "--text", dark ? "#e5e7eb" : "#1f2937"
    );
    document.documentElement.style.setProperty(
        "--muted", dark ? "#9ca3af" : "#6b7280"
    );
}

function printResume() {
    window.print();
}
