import { test } from '../fixtures/fixtures';

test('Correct title test', async ({ videoPage }) => {
  await videoPage.pageHasCorrectTitle();
});
test('Video list test', async ({ videoPage }) => {
  await videoPage.pageHasVideoList();
});
test('Next button test', async ({ videoPage }) => {
  await videoPage.pageHasNextButton();
});
test('Prev button test', async ({ videoPage }) => {
  await videoPage.pageHasPrevButton();
});
