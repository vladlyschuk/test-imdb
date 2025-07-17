import { defineConfig, devices } from '@playwright/test';
import { TestData } from './utils/test-data';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  timeout: TestData.expectations.defaultTimeout, // 60 seconds per test
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: 'https://www.imdb.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: process.env.CI ? true : false,
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
  ],
}); 