# Simple Test Plan for Toshi Application

## Objective

Verify the core functionality and user-facing behavior of the application using the official documentation at `http://localhost:3000/docs.html` as the requirements reference.

## Scope

- Basic page load and navigation
- Key UI elements and text content
- Title and branding validation
- Primary user flows exposed by the documentation
- Browser compatibility for supported targets via Playwright

## Test Environment

- Application under test: local development server
- Documentation reference: `http://localhost:3000/docs.html`
- Test framework: Playwright
- Test command: `npm test`
- Supported browsers: Chromium (default), optionally Firefox and WebKit if configured

## Test Strategy

Use end-to-end tests to confirm the app starts, renders main content, and matches documented behavior.

## Test Cases

### 1. Smoke test: application loads successfully

- Preconditions: application server running
- Steps:
  1. Navigate to the application root URL.
  2. Verify the page loads without errors.
- Expected result: page is reachable and renders.

### 2. Page title validation

- Preconditions: application server running
- Steps:
  1. Open the application root page.
  2. Verify the browser title includes the expected brand string such as `Rolnopol`.
- Expected result: page title matches documented expected title.

### 3. Documentation-guided feature check

- Preconditions: documentation available at `http://localhost:3000/docs.html`
- Steps:
  1. Open the docs page and review the main application features.
  2. Identify the key UI elements or flows described.
  3. Execute at least one documented user flow in the app.
- Expected result: documented behavior is present in the application.

### 4. Core UI content verification

- Preconditions: application server running
- Steps:
  1. Load the main page.
  2. Confirm critical text or UI elements described in docs are visible.
- Expected result: main page displays the core content described in the documentation.

## Acceptance Criteria

- `npm test` passes for the primary smoke and title cases
- The application root is reachable and renders correctly
- Title and documented branding content appear as expected
- Documented features from `http://localhost:3000/docs.html` are present in the application

## Execution Notes

- Start the application server before running tests
- Run `npx playwright test` to execute the suite
- Use `npx playwright show-report` after test runs for reporting
- If additional functionality is added, expand this plan with new cases from the docs
