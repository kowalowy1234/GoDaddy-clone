import { renderDrawer } from "./drawer.js";
import { renderDropdown } from "./dropdown.js";

const appEl = document.querySelector('.app');

const appClickHandler = (event) => {
    const dropdownEl = document.querySelector('.dropdown')
    const clickedEl = event.target;
    if (clickedEl.className.includes('drawer-backdrop')) {
        renderDrawer();
        appEl.classList.remove('--disable-scroll');
    }

    if (dropdownEl && !clickedEl.closest('.dropdown') && !clickedEl.className.includes('nav__button')) {
        renderDropdown();
    }
};

appEl.addEventListener('click', appClickHandler);