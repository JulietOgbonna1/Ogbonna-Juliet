// Captures laptop / tablet / mobile screenshots of each live project.
// Usage: node scripts/capture-screenshots.mjs [slug]
// Uses the locally installed Microsoft Edge (no browser download needed).
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const projects = {
  "mater-christi": "https://materchristicentre.com/",
  "nova-hairs": "https://nova-hairs.vercel.app/",
  // "dev-portfolio": "<public production url>",
};

const devices = {
  laptop: { width: 1440, height: 900, isMobile: false },
  tablet: { width: 820, height: 1180, isMobile: true },
  mobile: { width: 390, height: 844, isMobile: true },
};

const only = process.argv[2];
const browser = await chromium.launch({ channel: "msedge", headless: true });

try {
  for (const [slug, url] of Object.entries(projects)) {
    if (only && only !== slug) continue;
    const outDir = path.join("public", "projects", slug);
    await mkdir(outDir, { recursive: true });

    for (const [name, d] of Object.entries(devices)) {
      const context = await browser.newContext({
        viewport: { width: d.width, height: d.height },
        deviceScaleFactor: 2,
        isMobile: d.isMobile,
        hasTouch: d.isMobile,
        colorScheme: "light",
      });
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle", timeout: 90_000 }).catch(() => {});
      // Scroll through the page to trigger lazy-loaded media & reveal animations, then return to top.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(2500);
      const file = path.join(outDir, `${name}.jpg`);
      await page.screenshot({ path: file, type: "jpeg", quality: 90 });
      console.log("saved", file);
      await context.close();
    }
  }
} finally {
  await browser.close();
}
