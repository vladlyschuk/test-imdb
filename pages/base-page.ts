import { Page, Locator, test } from '@playwright/test';

export class BasePage {
  protected page: Page;
  public cookieBannerLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookieBannerLocator = this.page.getByTestId('accept-button');
  }

  async navigateTo(url: string): Promise<void> {
    await test.step(`Navigate to URL: ${url}`, async () => {
      await this.page.goto(url, { waitUntil: 'load' });
      await this.handleCookieBanner();
    });
  }

  async waitForPageLoad(): Promise<void> {
    await test.step('Wait for page DOM to load', async () => {
      await this.page.waitForLoadState('domcontentloaded');
    });
  }

  async getPageTitle(): Promise<string> {
    return await test.step('Get page title', async () => {
      return await this.page.title();
    });
  }

  async clickElement(locator: Locator): Promise<void> {
    await test.step('Click element', async () => {
      await locator.click();
    });
  }

  async typeText(locator: Locator, text: string): Promise<void> {
    await test.step(`Type text: "${text}"`, async () => {
      await locator.fill(text);
    });
  }

  async getTextContent(locator: Locator): Promise<string> {
    return await test.step('Get element text content', async () => {
      return await locator.textContent() || '';
    });
  }

  async isElementVisible(locator: Locator): Promise<boolean> {
    return await test.step('Check element visibility', async () => {
      return await locator.isVisible();
    });
  }

  async waitForElement(locator: Locator): Promise<void> {
    await test.step('Wait for element to become visible', async () => {
      await locator.waitFor({ state: 'visible' });
    });
  }

  async handleCookieBanner(): Promise<void> {
    await test.step('Handle cookie banner if present', async () => {
      if (await this.isElementVisible(this.cookieBannerLocator)) {
        await this.cookieBannerLocator.click();
      }
    });
  }
} 