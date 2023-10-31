import { renderDrawer } from "./drawer.js";

const appEl = document.querySelector('.app');

const appClickHandler = (event) => {
    const clickedEl = event.target;
    if (clickedEl.className.includes('drawer-backdrop')) {
        renderDrawer();
        appEl.classList.remove('--disable-scroll');
    }
};

appEl.addEventListener('click', appClickHandler);