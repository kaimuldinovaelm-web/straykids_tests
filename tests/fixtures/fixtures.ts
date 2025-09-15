import { test as base } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { DiscographyPage } from '../pages/DiscographyPage';
import { ProfilesPage } from '../pages/ProfilesPage';
import { GalleryPage } from '../pages/GalleryPage';
import { VideoPage } from '../pages/VideoPage';
import { NoticePage } from '../pages/NoticePage';
import { SchedulePage } from '../pages/SchedulePage';

type MyFixtures = {
  mainPage: MainPage;
  discographyPage: DiscographyPage;
  profilesPage: ProfilesPage;
  galleryPage: GalleryPage;
  videoPage: VideoPage;
  noticePage: NoticePage;
  schedulePage: SchedulePage;
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
  videoPage: async ({ page }, use) => {
    const videoPage = new VideoPage(page);
    await videoPage.open();
    await use(videoPage);
  },
  noticePage: async ({ page }, use) => {
    const noticePage = new NoticePage(page);
    await noticePage.open();
    await use(noticePage);
  },
  schedulePage: async ({ page }, use) => {
    const schedulePage = new SchedulePage(page);
    await schedulePage.open();
    await use(schedulePage);
  },
});
export { expect } from '@playwright/test';
