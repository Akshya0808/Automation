
 // @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Tests will run one by one
  fullyParallel: false,
  workers: 1,

  // CI settings
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // HTML report
  reporter: [['html', { open: 'always' }]],

  // Common settings
  use: {
    ...devices['Desktop Chrome'],
    headless: true,
    trace: 'on',
    video: 'on',
  },

  // Run only Chromium
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
