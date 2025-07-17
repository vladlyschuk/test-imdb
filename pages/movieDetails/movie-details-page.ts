import { Page, Locator, test, expect } from '@playwright/test';
import { BasePage } from '@pages/base-page';
import { TestData, isValidRating, isValidYear } from '@utils/test-data';

export class MovieDetailsPage extends BasePage {
  private readonly movieTitle: Locator;
  private readonly movieRating: Locator;
  private readonly releaseYear: Locator;

  constructor(page: Page) {
    super(page);
    
    this.movieTitle = this.page.getByRole('heading', { level: 1 });
    this.movieRating = this.page.getByText(/^\d+\.\d+$/).first();
    this.releaseYear = this.page.getByRole('link').filter({ hasText: /^\d{4}$/ }).first();
  }

  async getMovieTitle(): Promise<string> {
    return await test.step('Extract movie title from page', async () => {
      return await this.movieTitle.textContent() || '';
    });
  }

  async getMovieRating(): Promise<string> {
    return await test.step('Extract movie rating from page', async () => {
      return await this.movieRating.textContent() || '';
    });
  }

  async getReleaseYear(): Promise<string> {
    return await test.step('Extract release year from page', async () => {
      return await this.releaseYear.textContent() || '';
    });
  }

  async verifyMovieDetailsPage(): Promise<void> {
    await test.step('Check movie details page elements', async () => {
      await this.waitForElement(this.movieTitle);
      const isMoviePageVisible = await this.isElementVisible(this.movieTitle);
      expect(isMoviePageVisible, TestData.messages.pageNotLoaded).toBe(true);
    });
  }

  async verifyMovieTitleExists(): Promise<void> {
    await test.step('Verify movie title exists', async () => {
      const movieTitle = await this.getMovieTitle();
      expect(movieTitle).toMatch(TestData.patterns.title);
      expect(movieTitle.length).toBeGreaterThan(0);
    });
  }

  async verifyMovieRating(): Promise<void> {
    await test.step('Verify movie rating format and value', async () => {
      const movieRating = await this.getMovieRating();
      expect(isValidRating(movieRating), TestData.messages.invalidRating).toBe(true);
    });
  }

  async verifyReleaseYear(): Promise<void> {
    await test.step('Verify release year format and value', async () => {
      const releaseYear = await this.getReleaseYear();
      expect(isValidYear(releaseYear), TestData.messages.invalidYear).toBe(true);
    });
  }

  async verifyMovieTitle(expectedTitle: string): Promise<void> {
    await test.step('Verify movie title matches expected pattern', async () => {
      const movieTitle = await this.getMovieTitle();
      expect(movieTitle).toMatch(expectedTitle);
    });
  }
} 