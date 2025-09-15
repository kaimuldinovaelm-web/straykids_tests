import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';

export class VideoPage extends BasePage {
  private readonly titleLocator: Locator;
  private readonly videoListLocator: Locator;
  private readonly nextButtonLocator: Locator;
  private readonly prevButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = this.page.locator('div').filter({ hasText: /^VIDEO$/ });
    this.videoListLocator = this.page.locator('.video_list');
    this.nextButtonLocator = this.page.getByRole('button', { name: '이후이후' });
    this.prevButtonLocator = this.page.getByRole('button', { name: '이전이전' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/Video', { waitUntil: 'load' });
  }
  async pageHasCorrectTitle() {
    await expect(this.titleLocator).toHaveText('VIDEO');
  }
  async pageHasVideoList() {
    await expect(this.videoListLocator).toBeVisible();
  }
  async pageHasNextButton() {
    await this.nextButtonLocator.click();
  }
  async pageHasPrevButton() {
    await this.prevButtonLocator.click();
  }
}
