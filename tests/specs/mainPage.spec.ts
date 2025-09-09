import test from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Header elements visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.headerHasCorrectAreaSnapshot();
});
test('Footer elements visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.footerHasCorrectAreaSnapshot();
});
test('Main album elements visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.mainAlbumHasCorrectAreaSnapshot();
});
test('Video element visibility test', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.videoHasCorrectAreaSnapshot();
});
