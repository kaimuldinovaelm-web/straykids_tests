import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class DiscographyPage extends BasePage {
  private readonly titleLocator: Locator;
  private readonly discographyPageLocator: Locator;
  private readonly newReleasesLocator: Locator;
  private readonly nextButtonLocator: Locator;
  private readonly prevButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = this.page.locator('div').filter({ hasText: /^DISCOGRAPHY$/ });
    this.discographyPageLocator = this.page.locator('.container');
    this.newReleasesLocator = this.page.locator('.new_release_list');
    this.nextButtonLocator = this.page.getByRole('button', { name: '이후이후' });
    this.prevButtonLocator = this.page.getByRole('button', { name: '이전이전' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/DiscographyList');
  }
  async pageHasCorrectTitle() {
    await expect(this.titleLocator).toHaveText('DISCOGRAPHY');
  }
  async discigraphyPageHasCorrectLayout() {
    await this.checkLayoutByScreenshot(this.discographyPageLocator, 'discographyPage.png');
  }
  async pageHasNewReleasesList() {
    await expect(this.newReleasesLocator).toBeVisible();
  }
  async pageHasNextButton() {
    await this.nextButtonLocator.click();
  }
  async pageHasPrevButton() {
    await this.prevButtonLocator.click();
  }
}
