import { Page, expect } from "@playwright/test";

export class RegisterPage {
  constructor(private page: Page) {}

  async fillRegistrationForm(user: any) {
    await this.page.getByLabel("First Name").fill(user.firstName);
    await this.page.getByLabel("Last Name").fill(user.lastName);
    await this.page.getByLabel("E-Mail").fill(user.email);
    await this.page.getByLabel("Telephone").fill(user.phone);

    await this.page.locator("#input-password").fill(user.password);
    await this.page.locator("#input-confirm").fill(user.password);

    await this.page.getByRole("radio", { name: "Yes" }).check();
    await this.page.getByRole("checkbox").check();
  }

  async submit() {
    await this.page.getByRole("button", { name: "Continue" }).click();
  }

  async verifySuccess() {
    await expect(this.page.locator("h1"))
      .toHaveText("Your Account Has Been Created!");
  }
}
