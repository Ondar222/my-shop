// Карточка товара
export function getProductCard(title, price) {
    const item = document.createElement("li");
    item.classList.add("product-list__item");

    const producTitle = document.createElement("h2");
    producTitle.classList.add("product-list__title");
    producTitle.textContent = title;

    const productPrice = document.createElement("strong");
    productPrice.classList.add("product-list__price");
    productPrice.textContent = `${price} руб`;

    const addBasket = document.createElement("button");
    addBasket.classList.add("btn");
    addBasket.textContent = "В корзину";

    item.append(producTitle, productPrice, addBasket);

    return item;
}