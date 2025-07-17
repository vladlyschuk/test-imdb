import { test as base } from '@playwright/test';
import { HomePage } from '@/pages/homePage/home-page';
import { Top250Page } from '@/pages/top250Page/top-250-page';
import { MovieDetailsPage } from '@/pages/movieDetails/movie-details-page';

type TestFixtures = {
  homePage: HomePage;
  top250Page: Top250Page;
  movieDetailsPage: MovieDetailsPage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.openHomePage();
    await use(homePage);
  },

  top250Page: async ({ page }, use) => {
    const top250Page = new Top250Page(page);
    await use(top250Page);
  },

  movieDetailsPage: async ({ page }, use) => {
    const movieDetailsPage = new MovieDetailsPage(page);
    await use(movieDetailsPage);
  },
});

export { expect } from '@playwright/test'; 