export function createContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-section';

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';

    const description = document.createElement('p');
    description.textContent = 'We would love to hear from you. Reach out to us for reservations, special events, or any inquiries.';

    description.style.textAlign = 'center';
    description.style.fontSize = '1.2rem';
    description.style.marginBottom = '2rem';
    description.style.color = '#666';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    const contactItems = [
        {
            title: 'Location',
            content: "456 Culinary Avenue\nCentral City\nMetropolis, NY 10101"
        },
        {
            title: 'Phone',
            content: "(555) 987-6543\n\nReservations:\n(555) 987-6544"
        },
        {
            title: 'Email',
            content: "info@armansrestaurant.com\n\nReservations:\nreserve@armansrestaurant.com"
        },
        {
            title: 'Hours',
            content: 'Monday - Thursday: 5:00 PM - 10:00 PM\nFriday - Saturday: 5:00 PM - 11:00 PM\nSunday: 4:00 PM - 9:00 PM'
        }
    ];

    contactItems.forEach(item => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;

        const itemContent = document.createElement('p');
        itemContent.textContent = item.content;

        itemContent.style.whiteSpace = 'pre-line';
        itemContent.style.lineHeight = '1.6';

        contactItem.appendChild(itemTitle);
        contactItem.appendChild(itemContent);

        contactInfo.appendChild(contactItem);
    });

    contactDiv.appendChild(title);
    contactDiv.appendChild(description);
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}