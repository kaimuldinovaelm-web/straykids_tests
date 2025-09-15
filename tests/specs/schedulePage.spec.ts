import { test } from '../fixtures/fixtures';

test('Correct title test', async ({ schedulePage }) => {
  await schedulePage.pageHasCorrectTitle();
});
test('Schedule list test', async ({ schedulePage }) => {
  await schedulePage.pageHasScheduleList();
});
test('Calender test', async ({ schedulePage }) => {
  await schedulePage.pageHasCalendar();
});
test('Next button test', async ({ schedulePage }) => {
  await schedulePage.pageHasNextButton();
});
test('Prev button test', async ({ schedulePage }) => {
  await schedulePage.pageHasPrevButton();
});
