import { Page, test } from "@playwright/test";
import { SauceDemoHome } from "../pages/sauceDemoHome.page";
import { SauceDemoProducts } from "../pages/sauceDemoProducts.page";
import { SauceDemoCart } from "../pages/sauceDemoCart.page";

export async function checkSaucedemoHome(page: Page, url: string): Promise<void> {
    await test.step('Check home page', async () => {
        const sauceHome = new SauceDemoHome(page);

        await sauceHome.goToHome(url);
        await sauceHome.checkHomePage();
    })
}

export async function logonToSauce(page: Page, username: string, password: string): Promise<void> {
    await test.step('Log in', async () => {
        const sauceHome = new SauceDemoHome(page);

        await sauceHome.login(username, password);
    })
}

export async function checkProductPage(page: Page): Promise<void> {
    await test.step('Check product page', async () => {
        const sauceProducts = new SauceDemoProducts(page);

        await sauceProducts.checkProductPage();
    })
}

export async function addProductToCart(page: Page): Promise<void> {
    await test.step('Add to cart', async () => {
        const sauceProducts = new SauceDemoProducts(page);

        await sauceProducts.addToCart(0);
        await sauceProducts.checkAddedProduct()
    })
}

export async function goToShoppingCart(page: Page): Promise<void> {
    await test.step('Go to to cart', async () => {
        const sauceProducts = new SauceDemoProducts(page);

        await sauceProducts.goToShoppingCart()
    })
}

export async function checkCartPage(page: Page): Promise<void> {
    await test.step('Check cart page', async () => {
        const cartPage = new SauceDemoCart(page);

        await cartPage.checkCartPage();
    })
}

export async function continueShopping(page: Page): Promise<void> {
    await test.step('Click continue shopping', async () => {
        const cartPage = new SauceDemoCart(page);

        await cartPage.clickContinueButton();
    })
}

export async function compareScreenshots(page: Page): Promise<void> {
    await test.step('Compare screenshots', async () => {
        const sauceHome = new SauceDemoHome(page);

        await sauceHome.compareScreenshots();
    })
}
