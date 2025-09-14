import { expect, Locator, Page } from '@playwright/test';
 
export class SauceDemoProducts {
    readonly page: Page;
    readonly title: Locator;
    readonly product: Locator;
    readonly addToCartButton: Locator;
    readonly removeFromCartButton: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.locator('span.title');
        this.product = this.page.locator('div.inventory_item_name');
        this.addToCartButton = this.page.locator('button[id*="add"]');
        this.removeFromCartButton = this.page.locator('button[id*="remove"]');
        this.cartBadge = this.page.locator('span.shopping_cart_badge');
        this.cartLink = this.page.locator('[data-test="shopping-cart-link"]');
    }

    async checkProductPage(): Promise<void> {
        await expect(this.title).toBeVisible();
        await expect(this.product.first()).toBeVisible();
        await expect(this.cartBadge).not.toBeVisible()
    }

    async addToCart(nthElement: number): Promise<void> {
        await expect(this.product.nth(nthElement)).toBeVisible();
        await this.addToCartButton.nth(nthElement).click();
    }

    async checkAddedProduct(): Promise<void> {
        await expect(this.cartBadge).toBeVisible()
    }

    async goToShoppingCart(): Promise<void> {
        await this.cartLink.click();
    }
}