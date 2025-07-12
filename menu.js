const menuData = {
    dessert: {
        title: 'Exquisite Desserts',
        items: [
            {
                name: 'Chocolate Lava Cake',
                price: '$12',
                description: 'Warm chocolate cake with molten center, served with vanilla bean ice cream'
            },
            {
                name: 'Crème Brûlée',
                price: '$10',
                description: 'Classic French vanilla custard with caramelized sugar top'
            },
            {
                name: 'Tiramisu',
                price: '$11',
                description: 'Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone'
            },
            {
                name: 'Berry Tart',
                price: '$9',
                description: 'Fresh seasonal berries on pastry cream in a buttery tart shell'
            }
        ]
    },
    main: {
        title: 'Main Courses',
        items: [
            {
                name: 'Grilled Salmon',
                price: '$28',
                description: 'Atlantic salmon with lemon herb butter, seasonal vegetables, and wild rice'
            },
            {
                name: 'Beef Tenderloin',
                price: '$35',
                description: 'Prime cut beef with red wine reduction, roasted potatoes, and asparagus'
            },
            {
                name: 'Chicken Piccata',
                price: '$24',
                description: 'Pan-seared chicken breast with lemon caper sauce and angel hair pasta'
            },
            {
                name: 'Vegetarian Risotto',
                price: '$22',
                description: 'Creamy arborio rice with seasonal vegetables and truffle oil'
            },
            {
                name: 'Lobster Thermidor',
                price: '$42',
                description: 'Fresh lobster in a rich cream sauce, baked with Gruyère cheese'
            },
            {
                name: 'Duck Confit',
                price: '$32',
                description: 'Slow-cooked duck leg with cherry gastrique and root vegetables'
            }
        ]
    },
    sides: {
        title: 'Signature Sides',
        items: [
            {
                name: 'Truffle Mac & Cheese',
                price: '$14',
                description: 'Creamy macaroni with aged cheddar and truffle oil'
            },
            {
                name: 'Roasted Brussels Sprouts',
                price: '$10',
                description: 'Caramelized sprouts with pancetta and balsamic glaze'
            },
            {
                name: 'Garlic Mashed Potatoes',
                price: '$8',
                description: 'Yukon gold potatoes with roasted garlic and cream'
            },
            {
                name: 'Grilled Asparagus',
                price: '$9',
                description: 'Fresh asparagus spears with lemon zest and parmesan'
            }
        ]
    },
    drinks: {
        title: 'Curated Beverages',
        items: [
            {
                name: 'House Wine Selection',
                price: '$8-15',
                description: 'Red, white, and rosé wines from our sommelier\'s collection'
            },
            {
                name: 'Craft Cocktails',
                price: '$12-16',
                description: 'Signature cocktails made with premium spirits and fresh ingredients'
            },
            {
                name: 'Artisan Coffee',
                price: '$5',
                description: 'Single-origin coffee beans, expertly roasted and brewed'
            },
            {
                name: 'Fresh Juices',
                price: '$6',
                description: 'Daily selection of cold-pressed fruit and vegetable juices'
            },
            {
                name: 'Sparkling Water',
                price: '$4',
                description: 'Premium sparkling water with optional fruit garnish'
            }
        ]
    }
};

// menu section for any category
export function createMenuSection(category) {
    const menuSection = document.createElement('div');
    menuSection.className = 'menu-section';

    const title = document.createElement('h2');
    title.textContent = menuData[category].title;
    menuSection.appendChild(title);

    const menuGrid = document.createElement('div');
    menuGrid.className = 'menu-grid';

    menuData[category].items.forEach(item => {

        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.className = 'price';
        itemPrice.textContent = item.price;


        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
        menuGrid.appendChild(menuItem);
    });

    menuSection.appendChild(menuGrid);
    return menuSection;
}