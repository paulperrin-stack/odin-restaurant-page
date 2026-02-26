import "./menu.css";
import boeufImg from "./images/boeuf-bourguignon.jpg";
import coqImg from "./images/coq-au-vin.jpg";
import canardImg from "./images/confit-de-canard.jpg";
import soupeImg from "./images/soupe-a-l'oignon-gratinee.jpg";
import steakImg from "./images/steak-frites.jpg";
import moulesImg from "./images/moules-marinieres.jpg";

const menuItems = [
  {
    name: "Boeuf Bourguignon",
    description: "Slow-braised beef in rich Burgundy wine with pearl onions, mushrooms, lardons, and fresh herbs. Served with creamy mashed potatoes.",
    image: boeufImg,
  },
  {
    name: "Coq au Vin",
    description: "Tender chicken braised in red wine with bacon, button mushrooms, and glazed pearl onions. Deep, savory flavors finished with a touch of elegance.",
    image: coqImg,
  },
  {
    name: "Confit de Canard",
    description: "Duck leg confit slowly in its own fat until meltingly tender with ultra-crispy skin. Accompanied by golden roasted potatoes and a light frisée salad.",
    image: canardImg,
  },
  {
    name: "Soupe à l'Oignon Gratinée",
    description: "Caramelized onions in rich beef broth, crowned with golden croutons and bubbling Gruyère cheese. The ultimate bistro starter.",
    image: soupeImg,
  },
  {
    name: "Steak Frites",
    description: "Seared entrecôte with herb compound butter, served alongside golden crispy fries and a classic peppercorn sauce. Pure bistro perfection.",
    image: steakImg,
  },
  {
    name: "Moules Marinières",
    description: "Fresh mussels steamed in white wine, garlic, shallots, and fresh parsley, finished with a hint of cream. Served with crusty baguette.",
    image: moulesImg,
  },
];

const loadMenuPage = () => {
    const content = document.getElementById("content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const grid = document.createElement("div");
    grid.classList.add("menu-grid");

    menuItems.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        const cardName = document.createElement("h2");
        cardName.textContent = item.name;

        const cardDesc = document.createElement("p");
        cardDesc.textContent = item.description;

        card.appendChild(img);
        card.appendChild(cardName);
        card.appendChild(cardDesc);
        grid.appendChild(card);
    });

    content.appendChild(heading);
    content.appendChild(grid);
};

export default loadMenuPage;