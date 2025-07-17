import { Page, Locator, test } from '@playwright/test';
import { BasePage } from '@pages/base-page';
import { MenuComponent } from '@components/homePage/menu-component';
import { TestData } from '@utils/test-data';

export class HomePage extends BasePage {
  private readonly searchInput: Locator;
  private readonly menuButton: Locator;
  public readonly menuComponent: MenuComponent;

  constructor(page: Page) {
    super(page);
    
    this.searchInput = this.page.getByTestId('suggestion-search');
    this.menuButton = page.getByLabel('Open navigation drawer');
    this.menuComponent = new MenuComponent(this.page);
  }

  async openHomePage(): Promise<void> {
    await test.step('Open home page', async () => {
      await this.navigateTo(TestData.urls.home);
    });
  }

  async openMenu(): Promise<void> {
    await test.step('Open navigation menu', async () => {
      await this.menuButton.click();
      await this.menuComponent.top250MoviesLink.waitFor({ state: 'visible' });
    });
  }

  async searchMovie(movieName: string): Promise<void> {
    await test.step(`Type "${movieName}" in search field`, async () => {
      await this.typeText(this.searchInput, movieName);
      await this.page.waitForTimeout(2000);
    });
  }

  async openFirstMovie(): Promise<void> {
    await test.step('Click first search suggestion', async () => {
      const firstSuggestion = this.page.getByRole('option').first();
      await firstSuggestion.click();
      await this.waitForPageLoad();
    });
  }
} 