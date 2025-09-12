import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { DiscographyPage } from '../pages/DiscographyPage';
import { ProfilesPage } from '../pages/ProfilesPage';

type MyFixtures = {
  mainPage: MainPage;
  discographyPage: DiscographyPage;
  profilesPage: ProfilesPage;
};
export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await mainPage.open();
    await use(mainPage);
  },
  discographyPage: async ({ page }, use) => {
    //добавление повторяющихся шагов в фикстуры
    const discographyPage = new DiscographyPage(page);
    await discographyPage.open();
    await use(discographyPage);
  },
  profilesPage: async ({ page }, use) => {
    const profilesPage = new ProfilesPage(page);
    await profilesPage.open();
    await use(profilesPage);
  },
});
export { expect } from '@playwright/test';
