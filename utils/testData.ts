export class TestDataUtil {
  private static user: any;

  // Generate user only once
  static generateUser() {
    if (!this.user) {
      const timestamp = Date.now();

      this.user = {
        firstName: "Onkar",
        lastName: "Undale",
        email: `onkar${timestamp}@test.com`,
        phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
        password: "Test@123",
      };
    }

    return this.user;
  }

  // Return same user for login
  static getLoginUser() {
    if (!this.user) {
      throw new Error("User not generated. Call generateUser() first.");
    }

    return {
      email: this.user.email,
      password: this.user.password,
    };
  }

  // Optional: reset user (useful for parallel tests)
  static resetUser() {
    this.user = null;
  }

  static hardCodedUser() {
    return {
      email: "onkar1776132556004@test.com",
      password: "Test@123",
    };
  }
}
