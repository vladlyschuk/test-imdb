import { Page, Locator, test } from '@playwright/test';
import { BasePage } from '@pages/base-page';
import { TestData } from '@utils/test-data';

export class Top250Page extends BasePage {
  private readonly pageTitle: Locator;
  private readonly firstMovie: Locator;

  constructor(page: Page) {
    super(page);
    
    this.pageTitle = this.page.getByRole('heading', { name: 'IMDb Top 250 movies', level: 1 });
    this.firstMovie = this.page.getByRole('link').filter({ hasText: /^1\.\s/ }).first();
  }

  async navigateToTop250(): Promise<void> {
    await test.step('Load Top 250 page', async () => {
      await this.navigateTo(TestData.urls.top250);
      await this.waitForPageLoad();
    });
  }

  async clickFirstMovie(): Promise<void> {
    await test.step('Click first movie in list', async () => {
      await this.clickElement(this.firstMovie);
    });
  }

  async verifyOnTop250Page(): Promise<boolean> {
    return await test.step('Check Top 250 page title visibility', async () => {
      try {
        await this.waitForElement(this.pageTitle);
        return await this.isElementVisible(this.pageTitle);
      } catch {
        return false;
      }
    });
  }
} 