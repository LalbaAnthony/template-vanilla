const burgerBtn = document.getElementById("header-burger-menu");
burgerBtn.addEventListener("click", toggleSidePanel);

const closePanelBtn = document.getElementById("side-panel-close-button");
closePanelBtn.addEventListener("click", closeSidePanel);

function toggleSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    const mainPage = document.getElementById("main");
    if (sidePanel.classList.contains("open")) {
        sidePanel.classList.remove("open");
        mainPage.classList.remove("blur");
    }
    else {
        sidePanel.classList.add("open");
        mainPage.classList.add("blur");
    }
}

function openSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    const mainPage = document.getElementById("main");
    sidePanel.classList.add("open");
    mainPage.classList.add("blur");
}

function closeSidePanel() {
    const sidePanel = document.getElementById("side-panel");
    const mainPage = document.getElementById("main");
    sidePanel.classList.remove("open");
    mainPage.classList.remove("blur");
}