import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { getContent, getLocalePage, locales } from "../src/content.js";

const sitemapSource = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf8");

test("all supported locales have page metadata and translated content", () => {
  assert.deepEqual(locales, ["en", "ar", "th"]);

  for (const locale of locales) {
    const page = getLocalePage(locale);
    const content = getContent(locale);

    assert.ok(page.lang, `${locale} should define an HTML lang value`);
    assert.ok(page.path.startsWith("/"), `${locale} should define a root-relative path`);
    assert.ok(page.title.includes("Meccha Chameleon"), `${locale} should keep the game name in the title`);
    assert.ok(content.hero.text, `${locale} should define hero copy`);
    assert.equal(content.faq.items.length, 4, `${locale} should define the full FAQ set`);
  }
});

test("Arabic page is configured for right-to-left rendering", () => {
  assert.equal(getLocalePage("ar").dir, "rtl");
});

test("sitemap lists every localized landing page", () => {
  for (const locale of locales) {
    const page = getLocalePage(locale);

    assert.match(sitemapSource, new RegExp(`<loc>${page.url}</loc>`));
  }
});
