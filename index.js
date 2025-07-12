import './styles.css';
import { createHomePage } from './home.js';
import { createContactPage } from './contact.js';
import { createAboutPage } from './about.js';


//clearing content and displaying page for active button
function switchTab(activeBtn, pageFunction) {
    // Removing active class from nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    activeBtn.classList.add('active');

    contentDiv.innerHTML = '';

    const newContent = pageFunction();
    contentDiv.appendChild(newContent);
}

const homeBtn = document.getElementById('home-btn');
const contactBtn = document.getElementById('contact-btn');
const aboutBtn = document.getElementById('about-btn');
const contentDiv = document.getElementById('content');

//default
switchTab(homeBtn, createHomePage);

homeBtn.addEventListener('click', () => {
    switchTab(homeBtn, createHomePage);
});

contactBtn.addEventListener('click', () => {
    switchTab(contactBtn, createContactPage);
});

aboutBtn.addEventListener('click', () => {
    switchTab(aboutBtn, createAboutPage);
});
