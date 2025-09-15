import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NoticePage extends BasePage {
  private readonly titleLocator: Locator;
  private readonly noticeListLocator: Locator;
  private readonly nextButtonLocator: Locator;
  private readonly prevButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = this.page.locator('div').filter({ hasText: /^NOTICE$/ });
    this.noticeListLocator = this.page.locator('.noticeList');
    this.nextButtonLocator = this.page.getByRole('button', { name: '이후이후' });
    this.prevButtonLocator = this.page.getByRole('button', { name: '이전이전' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/NoticeList', { waitUntil: 'load' });
  }
  async pageHasCorrectTitle() {
    await expect(this.titleLocator).toHaveText('NOTICE');
  }
  async pageHasNoticeList() {
    await expect(this.noticeListLocator).toBeVisible();
  }
  async pageHasNextButton() {
    await this.nextButtonLocator.click();
  }
  async pageHasPrevButton() {
    await this.prevButtonLocator.click();
  }
}
