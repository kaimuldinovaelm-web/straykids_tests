import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { DiscographyPage } from '../pages/DiscographyPage';

type MyFixtures = {
  mainPage: MainPage;
  discographyPage: DiscographyPage;
};
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await use(mainPage);
  },
  discographyPage: async ({ page }, use) => {
    const discographyPage = new DiscographyPage(page);
    await discographyPage.open();
    await use(discographyPage);
  },
});
export { expect } from '@playwright/test';
