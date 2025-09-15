import { test } from '../fixtures/fixtures';
import { DiscographyPage } from '../pages/DiscographyPage';

test('Correct title test', async ({ discographyPage }) => {
  await discographyPage.pageHasCorrectTitle();
});
test('Discography layout test', async ({ discographyPage }) => {
  await discographyPage.discigraphyPageHasCorrectLayout();
});
test('New releases list test', async ({ discographyPage }) => {
  await discographyPage.pageHasNewReleasesList();
});
test('Next button test', async ({ discographyPage }) => {
  await discographyPage.pageHasNextButton();
});
test('Prev button test', async ({ discographyPage }) => {
  await discographyPage.pageHasPrevButton();
});
