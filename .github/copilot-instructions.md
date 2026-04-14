Use Conventional Commits for all changes.

Format:
type(scope?): subject

Types:
feat, fix, docs, style, refactor, perf, test, chore, build, ci, revert

Subject:
short, imperative, lowercase, no trailing period

Example:
feat(ui): add dark mode support

When creating tests, use tags from #sym:## Test Plan and Tagging System and keep that reference updated.

This repository uses the Playwright Test framework. Review `playwright.config.ts` for baseURL, timeouts, projects, and shared test configuration before adding or updating tests.
