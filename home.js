import { createMenuSection } from './menu.js';

export function createHomePage() {
    const homeDiv = document.createElement('div');
    homeDiv.className = 'home-container';

    const heroSection = document.createElement('div');
    heroSection.className = 'hero-section';

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'Welcome to Armans Restaurant';

    const heroDescription = document.createElement('p');
    heroDescription.textContent = 'Experience culinary excellence in an atmosphere of modern elegance. Our chef-crafted dishes blend international flavors with local ingredients to create unforgettable dining experiences.';

    heroSection.appendChild(heroTitle);
    heroSection.appendChild(heroDescription);

    //container for menu category (tabs)
    const menuTabsContainer = document.createElement('div');
    menuTabsContainer.className = 'menu-tabs';

    const tabs = [
        { id: 'dessert', name: 'Desserts' },
        { id: 'main', name: 'Main Course' },
        { id: 'sides', name: 'Sides' },
        { id: 'drinks', name: 'Drinks' }
    ];

    // Button for each menu category
    tabs.forEach((tab, index) => {
        const tabButton = document.createElement('button');
        tabButton.className = 'menu-tab';
        tabButton.textContent = tab.name;
        tabButton.dataset.tab = tab.id;  // category ID for click handling

        if (index === 0) tabButton.classList.add('active');

        menuTabsContainer.appendChild(tabButton);
    });

    const menuContentContainer = document.createElement('div');
    menuContentContainer.className = 'menu-content';
    menuContentContainer.id = 'menu-content';

    //default menu category
    const initialMenuContent = createMenuSection('dessert');
    menuContentContainer.appendChild(initialMenuContent)

    menuTabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-tab')) {
            menuTabsContainer.querySelectorAll('.menu-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            //highlighting clicked button
            e.target.classList.add('active');
            menuContentContainer.innerHTML = '';

             // new content for category using its data-tab value
            const newMenuContent = createMenuSection(e.target.dataset.tab);
            menuContentContainer.appendChild(newMenuContent);
        }
    });

    homeDiv.appendChild(heroSection);
    homeDiv.appendChild(menuTabsContainer);
    homeDiv.appendChild(menuContentContainer);

    return homeDiv;

}









