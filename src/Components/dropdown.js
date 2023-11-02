const DROPDOWNS = [
    {
        name: 'Contact',
        content: `
        <section class="dropdown-section">
            <p class="dropdown-section__title">Call us</p>
            <p class="dropdown-section__text">Call our award-winning sales & support team 24/7</p>
            <a href="#" class="dropdown-section__link">123 4567 8910</a>
        </section>
        <section class="dropdown-section">
            <p class="dropdown-section__title">Global directory</p>
            <a href="#" class="dropdown-section__link">Phone numbers and hours</a>
        </section>
        `
    },
    {
        name: 'Sign In',
        content: `
        <section class="dropdown-section">
            <p class="dropdown-section__title">Registered users</p>
            <p class="dropdown-section__text">Have an account? Sign in now.</p>
            <a href="#" class="dropdown-section__link">Sign In</a>
        </section>
        <section class="dropdown-section">
            <p class="dropdown-section__title">New customer</p>
            <p class="dropdown-section__text">New to GoDaddy? Create an account to get started today.</p>
            <a href="#" class="dropdown-section__link">Create an account</a>
        </section>
        <section class="dropdown-section">
            <p class="dropdown-section__title">Inbox links</p>
            <a href="#" class="dropdown-section__link">Sign in to Office 365 Email</a>
            <a href="#" class="dropdown-section__link">Sign in to GoDaddy Webmail</a>
        </section>
        `
    },
]

export const dropdownState = {
    currentDropdown: null
}

export const renderDropdown = (name, parent) => {
    const dropdownEl = document.querySelector('.dropdown');
    
    if (!DROPDOWNS.find(dropdown => dropdown.name === name)) {
        dropdownEl?.remove();
        dropdownState.currentDropdown = null;
        return;
    }
    
    
    if ((!name && dropdownEl) || (name === dropdownState.currentDropdown)) {
        dropdownEl.remove();
        dropdownState.currentDropdown = null;
        return;
    }
    
    const newDropdownContent = DROPDOWNS.find(dropdown => 
        dropdown.name === name
        ).content;
        
        if (name && dropdownEl) {
            dropdownEl.remove();
        }
        dropdownState.currentDropdown = name;
        
        const newDropdownEl = `
        <div class="dropdown">
        <div class="dropdown-container">
        ${newDropdownContent}
        </div>
        </div>
        `
    parent.insertAdjacentHTML('afterbegin', newDropdownEl);
}