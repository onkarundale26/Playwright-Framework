export function generateUser() {
  const timestamp = Date.now();

  return {
    firstName: "Onkar",
    lastName: "Undale",
    email: `onkar${timestamp}@test.com`,
    phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
    password: "Test@123",
  };
}
