export function createAboutPage() {
    const aboutDiv = document.createElement('div');
    aboutDiv.className = 'about-section';

    const title = document.createElement('h2');
    title.textContent = "About Arman's Restaurant";

    const content = document.createElement('div');
    content.style.lineHeight = '1.8';
    content.style.fontSize = '1.1rem';

    const paragraphs = [
        "Founded in 2024, Arman's Restaurant is a celebration of culinary passion and hospitality in the heart of the city. Our mission is to create memorable dining experiences that delight the senses and bring people together.",
        "Executive Chef Arman Rehman brings a unique blend of tradition and innovation, drawing inspiration from global cuisines and local ingredients. His dedication to quality and creativity is reflected in every dish served.",
        "At Arman's Restaurant, we believe that great food is only part of the experience. Our attentive staff, curated wine list, and inviting atmosphere ensure that every guest feels welcome and valued.",
        "We proudly source our ingredients from local farms and trusted partners, supporting our community and guaranteeing the freshest flavors each season. Our menu evolves to showcase the best of every harvest.",
        "Whether you're celebrating a milestone, enjoying a night out, or simply savoring a delicious meal, Arman's Restaurant offers the perfect setting for any occasion with our warm ambiance and exceptional cuisine."
    ];

    paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        p.style.marginBottom = '1.5rem';
        p.style.color = '#555';
        content.appendChild(p);
    });

    const signatureSection = document.createElement('div');
    signatureSection.style.textAlign = 'center';
    signatureSection.style.marginTop = '3rem';
    signatureSection.style.padding = '2rem';
    signatureSection.style.background = 'rgba(42, 82, 152, 0.05)';
    signatureSection.style.borderRadius = '15px';

    const chefQuote = document.createElement('p');
    chefQuote.textContent = '"Cooking is a journey of love and creativity. Every plate is a canvas, every meal a memory."';
    chefQuote.style.fontStyle = 'italic';
    chefQuote.style.fontSize = '1.3rem';
    chefQuote.style.color = '#2a5298';
    chefQuote.style.marginBottom = '1rem';

    const chefSignature = document.createElement('p');
    chefSignature.textContent = '- Chef Arman Rehman';
    chefSignature.style.fontWeight = 'bold';
    chefSignature.style.color = '#333';

    signatureSection.appendChild(chefQuote);
    signatureSection.appendChild(chefSignature);

    aboutDiv.appendChild(title);
    aboutDiv.appendChild(content);
    aboutDiv.appendChild(signatureSection);

    return aboutDiv;
}