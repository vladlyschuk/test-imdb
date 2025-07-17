# IMDb Test Automation Framework

A test automation framework for IMDb website using Playwright + TypeScript with Page Object Model pattern.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npm run install:browsers
```

## Running Tests

### Run all tests
```bash
npm run test
```

### Run tests with HTML report
```bash
npm run test -- --reporter=html
```

### Run a specific test file
```bash
npm run test -- tests/movie-search.spec.ts
npm run test -- tests/top250-movies.spec.ts
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### View test report
After running tests with HTML reporter:
```bash
npm run report
```

## Test Structure

The framework includes the following test scenarios:

- **Movie Search Test** (`movie-search.spec.ts`) - Search for "Inception" movie and validate details
- **Top 250 Movies Test** (`top250-movies.spec.ts`) - Navigate to Top 250 page and validate first movie details

## Configuration

- **Target Website**: https://www.imdb.com
- **Browser**: Chromium (headless by default)
- **Test Reports**: Generated in `playwright-report/` directory
- **Test Results**: Stored in `test-results/` directory 