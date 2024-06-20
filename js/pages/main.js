import { getMainTitle } from "../components/mainTitle.js";
import { getProductCard } from "../components/productCard.js";

// Главная страница
export function getMainPage() {
    const page = document.createElement("div");
    page.classList.add("page", "main-page", "container");
    const mainTitle = getMainTitle("Главная страница");

    const list = document.createElement("ul");
    list.classList.add("product-list", "list-reset");

    list.append(
        getProductCard("Товар 1", 400),
        getProductCard("Товар 2", 300),
        getProductCard("Товар 3", 700)
    );

    page.append(mainTitle, list);

    return page;
}