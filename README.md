# Arman's Restaurant - Dynamic Restaurant Website

## Project Overview
- **Dynamic content rendering** using JavaScript
- **Tabbed navigation** between Home, Menu, About, and Contact sections
- **restaurant aesthetic** with elegant typography and color scheme
- **Responsive design** that works on all devices
- **Modular JavaScript architecture** using webpack for maintainable code

##  Website Link

[View the website here](https://armanrehman.github.io/restaurant-page/)

## Technologies Used

- **JavaScript ** - functionality and DOM manipulation
- **Webpack** - Module bundling and development server
- **CSS** - Modern styling with gradients, animations, and responsive design

## Project Structure

```
restaurant-page/
├── index.js              # Main entry point and navigation logic
├── home.js               # Home page module with hero section and menu tabs
├── menu.js               # Menu data and rendering logic
├── about.js              # About page module
├── contact.js            # Contact page module
├── styles.css            # All styling and responsive design
├── template.html         # HTML template for Webpack
├── webpack.config.js     # Webpack configuration
├── package.json          # Dependencies and scripts
└── README.md
```

## Key Features

### 1. **Dynamic Content Generation**
- All content is created using JavaScript DOM manipulation
- No static HTML content in the main sections
- Modular approach with separate files for each page

### 2. **Tabbed Navigation System**
- Smooth transitions between different sections
- Active state management for navigation buttons
- Content clearing and re-rendering on tab switch

### 3. **Restaurant Design**
- color palette (gold, champagne, deep charcoal)
- hover effects and animations
- spacing and layout

### 4. **Interactive Menu System**
- Categorized menu items (Desserts, Main Course, Sides, Drinks)
- Dynamic tab switching within the menu section
- Hover effects and smooth transitions

### 5. **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography and spacing
- Touch-friendly navigation

##  How to Run

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/restaurant-page.git
   cd restaurant-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx webpack serve --open --mode development
   ```

4. Open your browser to `http://localhost:8080`

### Building for Production
```bash
npx webpack --mode production
```
