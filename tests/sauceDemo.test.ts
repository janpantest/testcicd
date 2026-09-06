import { test } from '@playwright/test';
import dotenv from 'dotenv'
import * as sauceDemoSteps from '../steps/sauceDemo.steps';
import path from 'path';

// const allureResultsPath = path.resolve(__dirname, '..', 'allure-results');
// console.info(allureResultsPath);

dotenv.config();

const userName = `${process.env.SAUCE_USERNAME}`;
const password = process.env.SAUCE_PASSWORD!;
const url = process.env.SAUCE_URL!;
// const url = 'https://www.saucedemo.com/';

test('Sauce demo WF', { tag: '@sauce' }, async ({ page }) => {
    await sauceDemoSteps.checkSaucedemoHome(page, url);
    await sauceDemoSteps.compareScreenshots(page);
    await sauceDemoSteps.logonToSauce(page, userName, password);

    await sauceDemoSteps.checkProductPage(page);
    await sauceDemoSteps.addProductToCart(page);
    await sauceDemoSteps.goToShoppingCart(page);

    await sauceDemoSteps.checkCartPage(page);
    await sauceDemoSteps.continueShopping(page);
});


// npx playwright test sauceDemo.test.ts --headed --project=chromium