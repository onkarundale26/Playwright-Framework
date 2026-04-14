import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goToHome() {
    await this.page.goto("https://naveenautomationlabs.com/opencart/");
  }

  async navigateToRegister() {
    await this.page.getByRole("link", { name: "My Account", exact: true }).click();
    await this.page.getByRole("link", { name: "Register" }).click();
  }
}
