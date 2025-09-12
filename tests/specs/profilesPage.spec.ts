import { test } from '../fixtures/fixtures';
import { ProfilesPage } from '../pages/ProfilesPage';

test('Bang Chan profile page test', async ({ profilesPage }) => {
  await profilesPage.bangChanCheckProfileClick();
  await profilesPage.bangChanScreenshot();
});
test('Lee Know profile page test', async ({ profilesPage }) => {
  await profilesPage.leeKnowCheckProfileClick();
  await profilesPage.leeKnowScreenshot();
});
test('Changbin profile page test', async ({ profilesPage }) => {
  await profilesPage.changbinCheckProfileClick();
  await profilesPage.changbinScreenshot();
});
test('Hyunjin profile page test', async ({ profilesPage }) => {
  await profilesPage.hyunjinCheckProfileClick();
  await profilesPage.hyunjinScreenshot();
});
test('Han profile page test', async ({ profilesPage }) => {
  await profilesPage.hanCheckProfileClick();
  await profilesPage.hanScreenshot();
});
test('Felix profile page test', async ({ profilesPage }) => {
  await profilesPage.felixCheckProfileClick();
  await profilesPage.felixScreenshot();
});
test('Seungmin profile page test', async ({ profilesPage }) => {
  await profilesPage.seungminCheckProfileClick();
  await profilesPage.seungminScreenshot();
});
test('IN profile page test', async ({ profilesPage }) => {
  await profilesPage.inCheckProfileClick();
  await profilesPage.inScreenshot();
});
