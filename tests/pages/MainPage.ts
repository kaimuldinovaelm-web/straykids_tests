import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly footerLocator: Locator;
  private readonly newAlbumBlockLocator: Locator;
  private readonly videoLocator: Locator;
  private readonly videoPlayerLocator: Locator;
  private readonly closeVideoPlayerLocator: Locator;
  private readonly mainlogoLocator: Locator;
  private readonly burgerMenuLocator: Locator;
  private readonly burgerMenuPopUp: Locator;
  private readonly noticeAllMemberListLocator: Locator;
  private readonly socailMediaLinksLocator: Locator;
  private readonly copyRightLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.locator('#header');
    this.footerLocator = this.page.locator('#footer');
    this.newAlbumBlockLocator = this.page.locator('.right_cont');
    this.videoLocator = this.page.locator('.video');
    this.videoPlayerLocator = this.page
      .locator('iframe[name="fancybox-frame1757574260195"]')
      .contentFrame()
      .locator('video');
    this.closeVideoPlayerLocator = this.page.getByRole('button', { name: 'Close' });
    this.mainlogoLocator = this.page.locator('#header').getByRole('link', { name: '로고' });
    this.burgerMenuLocator = this.page.getByRole('button', { name: '메뉴' });
    this.burgerMenuPopUp = this.page.locator('.gnb_list');
    this.noticeAllMemberListLocator = this.page.locator('.main_n_tt');
    this.socailMediaLinksLocator = this.page.locator('.sns');
    this.copyRightLocator = this.page.locator('#footer').getByText('Copyright © JYP ENTERTAINMENT');
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/', { waitUntil: 'load' });
  }
  async headerHasCorrectAreaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'headerAreaSnapshot.yml' });
  }
  async footerHasCorrectAreaSnapshot() {
    await expect(this.footerLocator).toMatchAriaSnapshot({ name: 'footerAreaSnapshot.yml' });
  }
  async mainAlbumHasCorrectAreaSnapshot() {
    await expect(this.newAlbumBlockLocator).toMatchAriaSnapshot({
      name: 'newAlbumAreaSnapshot.yml',
    });
  }
  async videoHasCorrectAreaSnapshot() {
    await expect(this.videoLocator).toMatchAriaSnapshot({ name: 'videoSnapshot.yml' });
  }
  //Проерки всех кнопок и ссылок на главной страницe
  async mainLogoClick() {
    await this.mainlogoLocator.click(); //Проверка перехода на главную страницу при нажатии на Лого
  }
  async burgerMenuOpen() {
    await this.burgerMenuLocator.click(); //Проверка попапа при нажатии на бургер меню
  }
  async noticeAllMembers() {
    await this.noticeAllMemberListLocator.click(); //Переход на страницу со списком мемберов
  }
  async openVideoPlayerWindow() {
    await this.videoLocator.click();
  }
  async closeVideoPlayerWindow() {
    await this.closeVideoPlayerLocator.click();
  }
  //Проверки соответствий попапов и всплывающих окон снэпшотам
  async burgerMenuAreaSnapshot() {
    await expect(this.burgerMenuPopUp).toMatchAriaSnapshot({
      name: 'burgerButtonPopUpSnapshot.yml',
    });
  }
  async videoPlayerWindowSnapshot() {
    await expect(this.videoPlayerLocator).toMatchAriaSnapshot({
      name: 'videoPlayerWindowSnapshot.yml',
    });
  }
  //Проверка наличия на странице ссылок на соцсети и авторские права
  async socialMediaSnapshot() {
    await expect(this.socailMediaLinksLocator).toMatchAriaSnapshot({
      name: 'socialMediaSnapshot.yml',
    });
  }
  async copyRightSnapshot() {
    await expect(this.copyRightLocator).toMatchAriaSnapshot({
      name: 'copyRightSnapshot.yml',
    });
  }
}
