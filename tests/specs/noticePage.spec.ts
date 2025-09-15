import { test } from '../fixtures/fixtures';

test('Correct title test', async ({ noticePage }) => {
  await noticePage.pageHasCorrectTitle();
});
test('Video list test', async ({ noticePage }) => {
  await noticePage.pageHasNoticeList();
});
test('Next button test', async ({ noticePage }) => {
  await noticePage.pageHasNextButton();
});
test('Prev button test', async ({ noticePage }) => {
  await noticePage.pageHasPrevButton();
});
