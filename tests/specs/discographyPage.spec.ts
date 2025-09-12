import { test } from '../fixtures/fixtures';

test('Discography layout test', async ({ discographyPage }) => {
  await discographyPage.discigraphyPageHasCorrectLayout();
});
