import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class DiscographyPage extends BasePage {
  private readonly discographyPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.discographyPageLocator = this.page.locator('.container');
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/DiscographyList');
  }
  async discigraphyPageHasCorrectLayout() {
    await this.checkLayoutByScreenshot(this.discographyPageLocator, 'discographyPage.png');
  }
}
