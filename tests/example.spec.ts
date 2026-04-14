import { test, expect } from "../fixtures/baseTest";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { generateUser } from "../utils/testData";

test.describe("User Registration", () => {

  test.beforeEach(async ({ page }) => {
    // Extra safety: clear cookies again if needed
    await page.context().clearCookies();

    const home = new HomePage(page);
    await home.goToHome();

    await expect(page).toHaveURL(/opencart/);
  });

  test("should register a new user successfully", async ({ page }) => {
    const home = new HomePage(page);
    const register = new RegisterPage(page);
    const user = generateUser();

    await home.navigateToRegister();
    await register.fillRegistrationForm(user);
    await register.submit();
    await register.verifySuccess();
  });

});
