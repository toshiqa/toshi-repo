import { expect, test } from "@playwright/test";

test("should display 'Rolnopol' in the page title @title @branding", async ({
  page,
}) => {
  await page.goto("");
  await expect(page).toHaveTitle(/Rolnopol/);
});

test("login page should load and be visible", async ({ page }) => {
  const response = await page.goto("/login.html");
  await expect(page.locator("body")).toBeVisible();
});

test("register page should load and be visible", async ({ page }) => {
  const response = await page.goto("/register.html");
  await expect(page.locator("body")).toBeVisible();
});
