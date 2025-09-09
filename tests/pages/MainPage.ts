import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly footerLocator: Locator;
  private readonly mainAlbumLocator: Locator;
  private readonly videoLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('#header');
    this.footerLocator = this.page.locator('#footer');
    this.mainAlbumLocator = this.page.locator('.right_cont');
    this.videoLocator = this.page.locator('.video');
  }
  async open() {
    this.page.goto('https://straykids.jype.com/');
  }
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot();
  }
  async footerHasCorrectAreaSnapshot() {
    await expect(this.footerLocator).toMatchAriaSnapshot();
  }
  async mainAlbumHasCorrectAreaSnapshot() {
    await expect(this.mainAlbumLocator).toMatchAriaSnapshot();
  }
  async videoHasCorrectAreaSnapshot() {
    await expect(this.mainAlbumLocator).toMatchAriaSnapshot();
  }
}
