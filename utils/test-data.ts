export const TestData = {
  movies: {
    inception: {
      searchTerm: 'Inception'
    }
  },
  patterns: {
    rating: /^\d+\.\d+$/,
    year: /^\d{4}$/,
    title: /^.{1,}$/
  },
  urls: {
    home: '/',
  },
  expectations: {
    defaultTimeout: 120000
  },
  messages: {
    invalidRating: 'Movie rating should be in format X.X',
    invalidYear: 'Release year should be 4 digits',
    pageNotLoaded: 'Page did not load properly'
  }
};

export function getRandomMovie() {
  const movieKeys = Object.keys(TestData.movies) as Array<keyof typeof TestData.movies>;
  const randomKey = movieKeys[Math.floor(Math.random() * movieKeys.length)];
  return TestData.movies[randomKey];
}

export function isValidRating(rating: string): boolean {
  return TestData.patterns.rating.test(rating);
}

export function isValidYear(year: string): boolean {
  return TestData.patterns.year.test(year);
} 