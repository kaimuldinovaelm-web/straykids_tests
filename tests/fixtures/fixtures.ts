import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { DiscographyPage } from '../pages/DiscographyPage';
import { ProfilesPage } from '../pages/ProfilesPage';
import { GalleryPage } from '../pages/GalleryPage';

type MyFixtures = {
  mainPage: MainPage;
  discographyPage: DiscographyPage;
  profilesPage: ProfilesPage;
  galleryPage: GalleryPage;
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
  galleryPage: async ({ page }, use) => {
    const galleryPage = new GalleryPage(page);
    await galleryPage.open();
    await use(galleryPage);
  },
});
export { expect } from '@playwright/test';
