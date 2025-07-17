import { defineConfig, devices } from '@playwright/test';
import { TestData } from './utils/test-data';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 2,
  timeout: TestData.expectations.defaultTimeout * 2, 
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: 'https://www.imdb.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    actionTimeout: TestData.expectations.defaultTimeout,
    navigationTimeout: TestData.expectations.defaultTimeout,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox']
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari']
      },
    },
  ],
}); 