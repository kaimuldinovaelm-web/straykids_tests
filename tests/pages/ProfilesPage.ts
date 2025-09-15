import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilesPage extends BasePage {
  private readonly bangChanPageLocator: Locator;
  private readonly leeKnowPageLocator: Locator;
  private readonly changbinPageLocator: Locator;
  private readonly hyunjinPageLocator: Locator;
  private readonly hanPageLocator: Locator;
  private readonly felixPageLocator: Locator;
  private readonly seungminPageLocator: Locator;
  private readonly inPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.bangChanPageLocator = this.page.getByRole('link', { name: 'BANG CHAN' });
    this.leeKnowPageLocator = this.page.getByRole('link', { name: 'LEE KNOW' });
    this.changbinPageLocator = this.page.getByRole('link', { name: 'CHANGBIN' });
    this.hyunjinPageLocator = this.page.getByRole('link', { name: 'HYUNJIN' });
    this.hanPageLocator = this.page.getByRole('link', { name: 'HAN', exact: true });
    this.felixPageLocator = this.page.getByRole('link', { name: 'FELIX' });
    this.seungminPageLocator = this.page.getByRole('link', { name: 'SEUNGMIN' });
    this.inPageLocator = this.page.getByRole('link', { name: 'I.N' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/Profile', { waitUntil: 'load' });
  }
  //actions
  async bangChanCheckProfileClick() {
    await this.bangChanPageLocator.click();
  }
  async leeKnowCheckProfileClick() {
    await this.leeKnowPageLocator.click();
  }
  async changbinCheckProfileClick() {
    await this.changbinPageLocator.click();
  }
  async hyunjinCheckProfileClick() {
    await this.hyunjinPageLocator.click();
  }
  async hanCheckProfileClick() {
    await this.hanPageLocator.click();
  }
  async felixCheckProfileClick() {
    await this.felixPageLocator.click();
  }
  async seungminCheckProfileClick() {
    await this.seungminPageLocator.click();
  }
  async inCheckProfileClick() {
    await this.inPageLocator.click();
  }
  //assertions
  async bangChanScreenshot() {
    await this.checkMembersProfilesScreenshot(this.bangChanPageLocator, 'BangChan.yml');
  }
  async leeKnowScreenshot() {
    await this.checkMembersProfilesScreenshot(this.leeKnowPageLocator, 'LeeKnow.yml');
  }
  async changbinScreenshot() {
    await this.checkMembersProfilesScreenshot(this.changbinPageLocator, 'Changbin.yml');
  }
  async hyunjinScreenshot() {
    await this.checkMembersProfilesScreenshot(this.hyunjinPageLocator, 'Hyunjin.yml');
  }
  async hanScreenshot() {
    await this.checkMembersProfilesScreenshot(this.hanPageLocator, 'Han.yml');
  }
  async felixScreenshot() {
    await this.checkMembersProfilesScreenshot(this.felixPageLocator, 'Felix.yml');
  }
  async seungminScreenshot() {
    await this.checkMembersProfilesScreenshot(this.seungminPageLocator, 'Seungmin.yml');
  }
  async inScreenshot() {
    await this.checkMembersProfilesScreenshot(this.inPageLocator, 'IN.yml');
  }
}
