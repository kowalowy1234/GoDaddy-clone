const DRAWERS = [
    {
        name: 'Domain Names',
        title: 'Domain Names',
        lists: [
            {
                listTitle: 'Domain Names',
                items: [
                    {
                        icon: 'search',
                        linkText: 'Search for domain names',
                        url: '#',
                    },
                    {
                        icon: 'coin',
                        linkText: 'Auctions for domain names',
                        url: '#',
                    },
                    {
                        icon: 'transfer',
                        linkText: 'Transfer domain names',
                        url: '#',
                    },
                    {
                        icon: 'file',
                        linkText: 'Appraise domain name value',
                        url: '#',
                    },
                    {
                        icon: 'list-ul',
                        linkText: 'Browse domain name options',
                        url: '#',
                    },
                    {
                        icon: 'user-circle',
                        linkText: 'Domain broker service',
                        url: '#',
                    },
                    {
                        icon: 'grid-alt',
                        linkText: 'Save with bundles',
                        url: '#',
                    }
                ],
            }
        ],
        img: 'https://images.pexels.com/photos/1181449/pexels-photo-1181449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        adText: 'Buy the domain you want',
    },
    {
        name: 'Websites and Hosting',
        title: 'Websites and Hosting',
        lists: [
            {
                listTitle: 'Websites',
                items: [
                    {
                        icon: 'dock-top',
                        linkText: 'Website builder',
                        url: '#',
                    },
                    {
                        icon: 'store',
                        linkText: 'Online store',
                        url: '#',
                    },
                    {
                        icon: 'edit',
                        linkText: 'Website design services',
                        url: '#',
                    },
                    {
                        icon: 'right-arrow-alt',
                        linkText: 'All website options',
                        url: '#',
                    }
                ],
            },
            {
                listTitle: 'Hosting',
                items: [
                    {
                        icon: 'hdd',
                        linkText: 'Web hosting',
                        url: '#',
                    },
                    {
                        icon: 'windows',
                        linkText: 'WordPress hosting',
                        url: '#',
                    },
                    {
                        icon: 'coin-stack',
                        linkText: 'VPS hosting',
                        url: '#',
                    },
                    {
                        icon: 'right-arrow-alt',
                        linkText: 'All hosting options',
                        url: '#',
                    }
                ],
            },
            {
                listTitle: 'Web security',
                items: [
                    {
                        icon: 'award',
                        linkText: 'SSL certificates',
                        url: '#',
                    },
                    {
                        icon: 'lock',
                        linkText: 'Website security',
                        url: '#',
                    },
                    {
                        icon: 'right-arrow-alt',
                        linkText: 'All security options',
                        url: '#',
                    }
                ],
            }
        ],
        img: 'https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg',
        adText: 'Let our experts build your site',
    },
    {
        name: 'Email and Marketing',
        title: 'Email and Marketing',
        lists: [
            {
                listTitle: 'Email and marketing tools',
                items: [
                    {
                        icon: 'envelope',
                        linkText: 'Email and Microsoft 365',
                        url: '#',
                    },
                    {
                        icon: 'image-alt',
                        linkText: 'Content & photo creator',
                        url: '#',
                    },
                    {
                        icon: 'meteor',
                        linkText: 'Free logo maker',
                        url: '#',
                    },
                    {
                        icon: 'support',
                        linkText: 'Digital marketing suite',
                        url: '#',
                    },
                    {
                        icon: 'right-arrow-alt',
                        linkText: 'All security options',
                        url: '#',
                    }
                ],
            }
        ],
        img: 'https://images.pexels.com/photos/7710047/pexels-photo-7710047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        adText: 'Hire an SEO expert',
    },
]

let drawerEl_;
let drawerBackdropEl;

export const drawerState ={
    currentDrawerName: ''
}

export const renderDrawer = (name='') => {
    if(name) {
        drawerState.currentDrawerName = name;
        const drawerContent = DRAWERS.find(drawer => (drawer.name === name))
        if (drawerContent) {
            const drawerEl = `
                <div class="drawer-backdrop"></div>
                <div class="drawer">
                    <div class="drawer-content">
                    ${
                                drawerContent.lists.map(list => (
                                    `
                                    <section class="drawer-section">
                                        <p class="drawer-section__title">${list.listTitle}</p>
                                        <ul class="drawer-list">
                                            ${
                                                list.items.map(item => 
                                                    `<li class="drawer-item">
                                                    <i class="bx bx-${item.icon} drawer-item__icon"></i>
                                                    <a href="${item.url}" class="drawer-item__link">${item.linkText}</a>
                                                    </li>`
                                                    ).join('')
                                            }
                                        </ul>
                                    </section>
                                    `
                                )).join('')
                            }
                        <section class="drawer-ad">
                            <img src="${drawerContent.img}" alt="ad" class="drawer-ad__image">
                            <p class="drawer-ad__link">${drawerContent.adText}</p>
                        </section>
                    </div>
                </div>
            `
            document.querySelector('.app').insertAdjacentHTML('afterbegin', drawerEl);
            
            drawerEl_ = document.querySelector('.drawer');
            drawerBackdropEl = document.querySelector('.drawer-backdrop');
    
            return;
        }
        drawerState.currentDrawerName = '';
        drawerEl_.remove();
        drawerBackdropEl.remove();
    }
    drawerState.currentDrawerName = '';
    drawerEl_.remove();
    drawerBackdropEl.remove();
}

export const changeDrawerContent = (name) => {
    if (name !== drawerState.currentDrawerName) {
        drawerState.currentDrawerName = name;
        const drawerContent = DRAWERS.find(drawer => (drawer.name === name))
        if (drawerContent) {
            const newDrawerContentEl = `
            <div class="drawer-content">
            ${
                        drawerContent.lists.map(list => (
                            `
                            <section class="drawer-section">
                                <p class="drawer-section__title">${list.listTitle}</p>
                                <ul class="drawer-list">
                                    ${
                                        list.items.map(item => 
                                            `<li class="drawer-item">
                                            <i class="bx bx-${item.icon} drawer-item__icon"></i>
                                            <a href="${item.url}" class="drawer-item__link">${item.linkText}</a>
                                            </li>`
                                            ).join('')
                                    }
                                </ul>
                            </section>
                            `
                        )).join('')
                    }
                <section class="drawer-ad">
                    <img src="${drawerContent.img}" alt="ad" class="drawer-ad__image">
                    <p class="drawer-ad__link">${drawerContent.adText}</p>
                </section>
            </div>
            `
            drawerEl_.innerHTML = '';
            drawerEl_.insertAdjacentHTML('afterbegin', newDrawerContentEl);
                
            return;
        }
        drawerState.currentDrawerName = '';
        drawerEl_.remove();
        drawerBackdropEl.remove();
    }
}