function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    if (sidePanel.classList.contains("open")) sidePanel.classList.remove("open");
    else sidePanel.classList.add("open");
}

function openSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    sidePanel.classList.add("open");
}

function closeSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    sidePanel.classList.remove("open");
}