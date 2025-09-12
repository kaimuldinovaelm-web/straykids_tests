import { expect, Locator, Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  protected async checkAreaSnapshot(locator: Locator, areaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: areaName,
    });
  }
  protected async checkLayoutByScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toHaveScreenshot(screenshotName);
  }
  protected async checkMembersProfilesScreenshot(locator: Locator, screenshotName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: screenshotName,
    });
  }
}
