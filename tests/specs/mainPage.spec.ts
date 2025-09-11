import { test } from '../fixtures/fixtures';
import { MainPage } from '../pages/MainPage';

test('Header elements visibility test', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAreaSnapshot();
});
test('Footer elements visibility test', async ({ mainPage }) => {
  await mainPage.footerHasCorrectAreaSnapshot();
});
test('Main album elements visibility test', async ({ mainPage }) => {
  await mainPage.mainAlbumHasCorrectAreaSnapshot();
});
test('Video element visibility test', async ({ mainPage }) => {
  await mainPage.videoHasCorrectAreaSnapshot();
});
test('Logo click test', async ({ mainPage }) => {
  await mainPage.mainLogoClick();
});
test('Burger menu popup test', async ({ mainPage }) => {
  await mainPage.burgerMenuOpen();
  await mainPage.burgerMenuAreaSnapshot();
});
test('Notice link test', async ({ mainPage }) => {
  await mainPage.noticeAllMembers();
});
test('Video player popup test', async ({ mainPage }) => {
  await mainPage.openVideoPlayerWindow();
  await mainPage.videoHasCorrectAreaSnapshot();
  await mainPage.closeVideoPlayerWindow();
});
test('Social media links test', async ({ mainPage }) => {
  await mainPage.socialMediaSnapshot();
});
test('Copy right test', async ({ mainPage }) => {
  await mainPage.copyRightSnapshot();
});
