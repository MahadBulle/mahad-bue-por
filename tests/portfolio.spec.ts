import { test, expect } from "@playwright/test";
test("project filters and dialog show the selected work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("digital");
  await expect(page.getByTestId("project-card")).toHaveCount(4);
  await page.getByRole("button", { name: "Websites", exact: true }).click();
  await expect(page.getByTestId("project-card")).toHaveCount(1);
  await page.getByRole("button", { name: "View details for Community Website" }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("heading", { name: "Community Website" })).toBeVisible();
  await expect(dialog.getByRole("link", { name: "Connect on GitHub" })).toHaveAttribute("href", "https://github.com/MahadBulle");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await page.getByRole("button", { name: "All projects" }).click();
  await expect(page.getByTestId("project-card")).toHaveCount(4);
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
});
test("theme preference persists across reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/light/);
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});
test("mobile navigation works without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
});
test("GitHub contact actions work", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Visit my GitHub" })).toHaveAttribute("href", "https://github.com/MahadBulle");
  await page.getByRole("button", { name: "Copy profile link" }).click();
  await expect(page.getByRole("button", { name: "Profile link copied" })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("https://github.com/MahadBulle");
});
