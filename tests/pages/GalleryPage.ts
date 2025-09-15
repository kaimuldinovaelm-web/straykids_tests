import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class GalleryPage extends BasePage {
  private readonly titlelocator: Locator;
  private readonly gridLocator: Locator;
  private readonly nextButtonLocator: Locator;
  private readonly prevButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titlelocator = this.page.locator('div').filter({ hasText: /^GALLERY$/ });
    this.gridLocator = this.page.locator('.grid');
    this.nextButtonLocator = this.page.getByRole('button', { name: '이후이후' });
    this.prevButtonLocator = this.page.getByRole('button', { name: '이전이전' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/Gallery', { waitUntil: 'load' });
  }
  async pageHasCorrectTitle() {
    await expect(this.titlelocator).toHaveText('GALLERY');
  }
  async pageHasGalleryGrid() {
    await expect(this.gridLocator).toBeVisible();
  }
  async pageHasNextButton() {
    await this.nextButtonLocator.click();
  }
  async pageHasPrevButton() {
    await this.prevButtonLocator.click();
  }
}
