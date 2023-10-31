import {renderDrawer, drawerState, changeDrawerContent} from "./drawer.js";

const headerEl = document.querySelector('.header');
const mobileNavEl = document.querySelector('.mobile-nav');
const mobileNavExitButton = document.querySelector('mobile-nav__exit-button');
const bodyEl = document.querySelector('body');

const headerClickHandler = (event) => {
    const drawerEl = document.querySelector('.drawer')
    const clickedEl = event.target;

    if (clickedEl.className.includes('hamburger')) {
        mobileNavEl.classList.remove('not-visible');
        bodyEl.classList.add('--disable-scroll');
        return;
    }
    
    if (clickedEl.className.includes('x-icon') || clickedEl.className === 'mobile-nav') {
        mobileNavEl.classList.add('not-visible');
        bodyEl.classList.remove('--disable-scroll');
        return;
    }

    if (!clickedEl.className.includes('nav__link') && drawerEl) {
        renderDrawer();
        bodyEl.classList.remove('--disable-scroll');
    } 

    if (clickedEl.className.includes('nav__link')) {
        if (drawerEl && drawerState.currentDrawerName === clickedEl.textContent) {
            renderDrawer();
            bodyEl.classList.remove('--disable-scroll');
            clickedEl.blur();
            return;
        }

        if (drawerEl && drawerState.currentDrawerName !== clickedEl.textContent) {
            changeDrawerContent(clickedEl.textContent);
            return;
        }
        
        renderDrawer(clickedEl.textContent);
        bodyEl.classList.add('--disable-scroll');
    }
}

headerEl.addEventListener('click', headerClickHandler);