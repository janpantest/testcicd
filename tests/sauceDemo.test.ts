import { test } from '@playwright/test';
import dotenv from 'dotenv'
import * as sauceDemoSteps from '../steps/sauceDemo.steps';

dotenv.config();

const userName = `${process.env.SAUCE_USERNAME}`;
const password = process.env.SAUCE_PASSWORD!;
// const url = process.env.SAUCE_URL!;
const url = 'https://www.saucedemo.com/';

test('Sauce demo WF', { tag: '@sauce' }, async ({ page }) => {
    await sauceDemoSteps.checkSaucedemoHome(page, url);
    await sauceDemoSteps.logonToSauce(page, userName, password)

    await sauceDemoSteps.checkProductPage(page);
    await sauceDemoSteps.addProductToCart(page);
    await sauceDemoSteps.goToShoppingCart(page);

    await sauceDemoSteps.checkCartPage(page);
    await sauceDemoSteps.continueShopping(page);
});


// npx playwright test sauceDemo.test.ts --headed --project=chromium