import { expect, test } from "@playwright/test";

test("should display 'Rolnopol' in the page title @title @branding", async ({
  page,
}) => {
  await page.goto("");
  await expect(page).toHaveTitle(/Rolnopol/);
});

test("login page should load and show subtitle text @smoke @login", async ({
  page,
}) => {
  await page.goto("/login.html");

  const expectedSubtitle = "User Login & Account Access";
  const subtitle = page.getByTestId("login-subtitle");

  await expect(subtitle).toHaveText(expectedSubtitle);
});

test("register page should load and show subtitle text @smoke @register", async ({
  page,
}) => {
  await page.goto("/register.html");

  const expectedRegisterSubtitle = "Create Your User Account";
  const subtitle = page.getByTestId("register-subtitle");

  await expect(subtitle).toBeVisible();
  await expect(subtitle).toHaveText(expectedRegisterSubtitle);
});

test("swagger page should load and show API description @smoke @swagger", async ({
  page,
}) => {
  await page.goto("/swagger.html");

  const expectedSwaggerDescription =
    "API documentation for the Rolnopol service with versioning support";
  const description = page
    .frameLocator("#swagger-frame")
    .getByText(expectedSwaggerDescription, { exact: true });

  await expect(description).toBeVisible();
  await expect(description).toHaveText(expectedSwaggerDescription);
});

test("docs page should load and show subtitle text @smoke @docs", async ({
  page,
}) => {
  await page.goto("/docs.html");

  const expectedDocsSubtitle = "Rolnopol System Guide & API Reference";
  const docsSubtitle = page.locator(".docs-header-subtitle");

  await expect(docsSubtitle).toBeVisible();
  await expect(docsSubtitle).toHaveText(expectedDocsSubtitle);
});
