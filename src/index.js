import "./styles.css";
import HomePage from "./Home";
import MenuPage from "./Menu";
import contactPage from "./Contact";
const navbarButton = document.querySelector(".navbar");
navbarButton.addEventListener("click", (event) => {
    const target = event.target;
    if (target.id === "home") {
        HomePage.render();
    } else if (target.id === "menu") {
        MenuPage.render();
    } else if (target.id === "contact") {
        contactPage.render();
    }
});

console.log("Starting Odin Restaurant...");