import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SchedulePage extends BasePage {
  private readonly titleLocator: Locator;
  private readonly scheduleListLocator: Locator;
  private readonly calendarLocator: Locator;
  private readonly nextButtonLocator: Locator;
  private readonly prevButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = this.page.locator('#frm').getByText('SCHEDULE', { exact: true });
    this.scheduleListLocator = this.page.locator('div.sch_cont').first();
    this.calendarLocator = this.page.locator('.n_right');
    this.nextButtonLocator = this.page.getByRole('button', { name: '이후이후' });
    this.prevButtonLocator = this.page.getByRole('button', { name: '이전이전' });
  }
  async open() {
    await this.page.goto('https://straykids.jype.com/Default/Schedule', { waitUntil: 'load' });
  }
  async pageHasCorrectTitle() {
    await expect(this.titleLocator).toHaveText('SCHEDULE');
  }
  async pageHasScheduleList() {
    await expect(this.scheduleListLocator).toBeVisible();
  }
  async pageHasCalendar() {
    await expect(this.calendarLocator).toBeVisible();
  }
  async pageHasNextButton() {
    await this.nextButtonLocator.click();
  }
  async pageHasPrevButton() {
    await this.prevButtonLocator.click();
  }
}
