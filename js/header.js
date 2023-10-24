const burgerBtn = document.getElementById("header-burger-menu");
burgerBtn.addEventListener("click", toggleSidePanel);

const closePanelBtn = document.getElementById("side-panel-close-button");
closePanelBtn.addEventListener("click", closeSidePanel);

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