const headerEl = document.querySelector('.header');
const mobileNavEl = document.querySelector('.mobile-nav');
const mobileNavExitButton = document.querySelector('mobile-nav__exit-button')
const bodyEl = document.querySelector('body');

const headerClickHandler = (event) => {
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

}

headerEl.addEventListener('click', headerClickHandler);