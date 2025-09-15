import { test } from '../fixtures/fixtures';
import { GalleryPage } from '../pages/GalleryPage';

// test('Gallery pages test', async ({ page }) => {
//   test.setTimeout(600000);
//   await page.goto('https://straykids.jype.com/Default/Gallery');
//   await page.waitForLoadState('networkidle');

//   let pageNumber = 1;
//   let hasNextPage = true;
//   const MAX_PAGES = 42; // Максимальное количество страниц для проверки

//   while (hasNextPage && pageNumber <= MAX_PAGES) {
//     console.log(`Checking page # ${pageNumber}`);

//     await page.waitForSelector('img', { timeout: 15000 });

//     await expect(page).toHaveScreenshot(`gallery-page-${pageNumber}.png`, {
//       fullPage: true,
//       timeout: 30000,
//       threshold: 0.3,
//       maxDiffPixels: 100000,
//     });

//     const nextButton = page.locator('.next-btn');
//     const isNextButtonVisible = await nextButton.isVisible();
//     const isNextButtonEnabled = isNextButtonVisible ? await nextButton.isEnabled() : false;

//     if (isNextButtonVisible && isNextButtonEnabled && pageNumber < MAX_PAGES) {
//       console.log(`Moving to page ${pageNumber + 1}`);
//       await nextButton.click();
//       await page.waitForLoadState('networkidle');
//       await page.waitForTimeout(3000);
//       pageNumber++;
//     } else {
//       if (pageNumber >= MAX_PAGES) {
//         console.log(`Reached maximum page limit (${MAX_PAGES}). Stopping.`);
//       } else {
//         console.log(`Reached last page. Total pages checked: ${pageNumber}`);
//       }
//       hasNextPage = false;
//     }
//   }
// });
test('Correct title test', async ({ galleryPage }) => {
  await galleryPage.pageHasCorrectTitle();
});
test('Grid test', async ({ galleryPage }) => {
  await galleryPage.pageHasGalleryGrid();
});
test('Next button test', async ({ galleryPage }) => {
  await galleryPage.pageHasNextButton();
});
test('Prev button test', async ({ galleryPage }) => {
  await galleryPage.pageHasPrevButton();
});
