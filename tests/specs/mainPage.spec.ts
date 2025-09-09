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
