import { test } from '@utils/fixtures';

test.describe('Top 250 movies tests', () => {
  test.beforeEach(async ({ homePage, top250Page }) => {
    await homePage.openMenu();
    await homePage.menuComponent.navigateToTop250Movies();
    await top250Page.clickFirstMovie();
  });

  test('verify movie details from Top 250 page for first movie', async ({ movieDetailsPage }) => {
    await movieDetailsPage.verifyMovieTitleExists();
    await movieDetailsPage.verifyMovieRating();
    await movieDetailsPage.verifyReleaseYear();
  });
}); 