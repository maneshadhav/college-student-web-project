// This file contains JavaScript code for the website. It may include functionality such as event listeners, form validation, or dynamic content updates.

// Add card layout to the main content dynamically
const cardData = [
    { title: "Card 1", description: "This is the first card.", image: "assets/card1.jpg" },
    { title: "Card 2", description: "This is the second card.", image: "assets/card2.jpg" },
    { title: "Card 3", description: "This is the third card.", image: "assets/card3.jpg" }
];

// Move dynamically created cards into the "Projects" section
const projectsSection = document.querySelector('#projects .project-grid');

cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'project-card';

    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;

    const title = document.createElement('h3');
    title.textContent = card.title;

    const description = document.createElement('p');
    description.textContent = card.description;

    const link = document.createElement('a');
    link.href = '#';
    link.className = 'btn';
    link.textContent = 'View Project';

    cardElement.appendChild(img);
    cardElement.appendChild(title);
    cardElement.appendChild(description);
    cardElement.appendChild(link);

    projectsSection.appendChild(cardElement);
});