import "./about.css";

const loadAboutPage = () => {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Notre Histoire";

    const section = document.createElement("div");
    section.classList.add("about-section");

    const subtitle = document.createElement("h2");
    subtitle.textContent = "L'Esprit de Chez Nous";

    const p1 = document.createElement("p");
    p1.textContent = "Nestled in the spirit of a classic Parisian bistro, Chez Nous invites you to savor the authentic flavors of France. Our chefs draw from generations of culinary tradition, using time-honored techniques and the finest seasonal ingredients to create dishes that are both comforting and sophisticated.";

    const p2 = document.createElement("p");
    p2.textContent = "Whether it's a slow-braised stew or crisp duck confit, every plate tells a story of passion, heritage, and the simple joy of good food shared with good company. Join us for an evening of la belle vie.";

    const divider = document.createElement("hr");

    const infoGrid = document.createElement("div");
    infoGrid.classList.add("about-grid");

    const hours = document.createElement("div");
    hours.classList.add("about-card");
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Opening Hours";
    const hoursP1 = document.createElement("p");
    hoursP1.textContent = "Monday – Friday";
    const hoursP2 = document.createElement("p");
    hoursP2.textContent = "12pm – 10pm";
    const hoursP3 = document.createElement("p");
    hoursP3.textContent = "Saturday – Sunday";
    const hoursP4 = document.createElement("p");
    hoursP4.textContent = "11am – 11pm";
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursP1);
    hours.appendChild(hoursP2);
    hours.appendChild(hoursP3);
    hours.appendChild(hoursP4);

    const location = document.createElement("div");
    location.classList.add("about-card");
    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";
    const locationP1 = document.createElement("p");
    locationP1.textContent = "12 Rue de la Paix";
    const locationP2 = document.createElement("p");
    locationP2.textContent = "Paris, France";
    location.appendChild(locationTitle);
    location.appendChild(locationP1);
    location.appendChild(locationP2);

    const contact = document.createElement("div");
    contact.classList.add("about-card");
    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "Reservations";
    const contactP1 = document.createElement("p");
    contactP1.textContent = "+33 1 23 45 67 89";
    const contactP2 = document.createElement("p");
    contactP2.textContent = "contact@cheznous.fr";
    contact.appendChild(contactTitle);
    contact.appendChild(contactP1);
    contact.appendChild(contactP2);

    infoGrid.appendChild(hours);
    infoGrid.appendChild(location);
    infoGrid.appendChild(contact);

    section.appendChild(subtitle);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(divider);
    section.appendChild(infoGrid);

    content.appendChild(heading);
    content.appendChild(section);
};

export default loadAboutPage;