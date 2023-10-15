function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    const isOpen = sidePanel.classList.contains(open) ? true : false;
    if (isOpen) sidePanel.classList.remove("open");
    else sidePanel.classList.add("open");
}

function closeSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    sidePanel.classList.remove("open");
}