const headerEl = document.querySelector('.header');
const mobileNavEl = document.querySelector('.mobile-nav');
const mobileNavExitButton = document.querySelector('mobile-nav__exit-button')

const headerClickHandler = (event) => {
    const clickedEl = event.target;
    
    if (clickedEl.className.includes('hamburger')) {
        mobileNavEl.classList.remove('not-visible');
        return;
    }
    
    if (clickedEl.className.includes('x-icon') || clickedEl.className === 'mobile-nav') {
        mobileNavEl.classList.add('not-visible');
        return;
    }

}

headerEl.addEventListener('click', headerClickHandler);