import { test } from '@utils/fixtures';
import { TestData } from '@utils/test-data';

test.describe('Movie search tests', () => {
  const movieData = TestData.movies.inception;

  test.beforeEach(async ({ homePage }) => {
    await homePage.searchMovie(movieData.searchTerm);
    await homePage.openFirstMovie();
  });

  test(`validate movie title for "${movieData.searchTerm}"`, async ({ movieDetailsPage }) => {
    await movieDetailsPage.verifyMovieDetailsPage();
    await movieDetailsPage.verifyMovieTitleExists();
    await movieDetailsPage.verifyMovieTitle(movieData.searchTerm);
  });
}); 