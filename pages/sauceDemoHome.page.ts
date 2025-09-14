import { expect, Locator, Page } from '@playwright/test';
import { firstRunValues, secondRunValues } from '../helpers/constants';
import { clickIfElementClickable, isButtonClickable } from '../helpers/helpers';

export class SauceDemoHome {
    readonly page: Page;
    readonly logoHome: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoHome = this.page.locator('div.login_logo');
        this.usernameInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
    }

    async goToHome(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async checkHomePage(): Promise<void> {
        await expect(this.logoHome).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();

    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}