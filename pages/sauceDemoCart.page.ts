import { expect, Locator, Page } from '@playwright/test';

export class SauceDemoCart {
    readonly page: Page;
    readonly title: Locator;
    readonly product: Locator;
    readonly checkoutButton: Locator;
    readonly removeFromCartButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('[data-test="title"]');
        this.product = this.page.locator('div.inventory_item_name');
        this.checkoutButton = this.page.locator('button[id*="checkout"]');
        this.removeFromCartButton = this.page.locator('button[id*="remove"]');
        this.continueShoppingButton = this.page.locator('button[id*="continue"]');
        this.cartBadge = this.page.locator('span.shopping_cart_badge');
    }

    async checkCartPage(): Promise<void> {
        await expect(this.title).toBeVisible();
        await expect(this.product.first()).toBeVisible();
        await expect(this.checkoutButton).toBeVisible();
        await expect(this.removeFromCartButton).toBeVisible();
        await expect(this.continueShoppingButton).toBeVisible();
        await expect(this.cartBadge).toBeVisible();
    }

    async clickContinueButton(): Promise<void> {
        await this.continueShoppingButton.click();
    }
}