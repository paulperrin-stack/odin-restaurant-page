import "./home.css";

const loadHomePage = () => {
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Chez Nous";

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const description = document.createElement("p");
    description.textContent = "Step into Chez Nous and experience the elegance of French cuisine - simple, soulful, and unforgettable.";

    hero.appendChild(description);
    content.appendChild(title);
    content.appendChild(hero);
};

export default loadHomePage;