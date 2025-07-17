import { type Page, type Locator, test } from "@playwright/test";

export class MenuComponent {
  private readonly page: Page;
  public readonly top250MoviesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.top250MoviesLink = page.getByLabel("Go to Top 250 movies");
  }

  async navigateToTop250Movies(): Promise<void> {
    await test.step("Navigate to Top 250 movies via menu", async () => {
      await this.top250MoviesLink.click();
      await this.page.waitForLoadState("networkidle");
    });
  }
}
