import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
import { getMainTitle } from "./components/mainTitle.js";
import { getDesc } from "./components/desc.js";

//Страницы
import { getMainPage } from "./pages/main.js";
// import { getProductPage } from "./pages/product.js";
// import { getCatalogPage } from "./pages/catalog.js";
// import { getBasketPage } from "./pages/basket.js";

const app = document.getElementById("app");

const header = getHeader();
const pageContainer = getPageContainer();

export async function navigation(page) {
    pageContainer.innerHTML = "";
    switch (page) {
        case "catalog":
            const moduleCatalog = await
            import ("./pages/catalog.js");
            const catalogPage = moduleCatalog.getCatalogPage();
            pageContainer.append(catalogPage);
            break;

        case "basket":
            const moduleBasket = await
            import ("./pages/basket.js");
            const basketPage = moduleBasket.getBasketPage();
            pageContainer.append(basketPage);
            break;
        default:
            const moduleMain = await
            import ("./pages/main.js");
            const mainPage = moduleMain.getMainPage();
            pageContainer.append(mainPage);
            break;
    }
};

export const router = new Navigo("/");

router.on("/", async() => {
    const moduleMain = await
    import ("./pages/main.js");
    const mainPage = moduleMain.getMainPage();
    pageContainer.append(mainPage);
});

router.on("/catalog", async() => {
    const moduleCatalog = await
    import ("./pages/catalog.js");
    const catalogPage = moduleCatalog.getCatalogPage();
    pageContainer.append(catalogPage);
});

router.on("/basket", async() => {
    const moduleBasket = await
    import ("./pages/basket.js");
    const basketPage = moduleBasket.getBasketPage();
    pageContainer.append(basketPage);
});

router.resolve();


app.append(header, pageContainer);