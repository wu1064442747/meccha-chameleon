import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getLocalePage, localeMeta, locales } from "../src/content.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(projectRoot, "dist", "index.html");
const rootPlaceholder = '<div id="root"></div>';

const viteServer = await createServer({
  appType: "custom",
  logLevel: "error",
  root: projectRoot,
  server: {
    middlewareMode: true
  }
});

try {
  const { render } = await viteServer.ssrLoadModule("/src/entry-server.jsx");
  const indexHtml = await readFile(indexPath, "utf8");

  if (!indexHtml.includes(rootPlaceholder)) {
    throw new Error(`Expected ${indexPath} to contain ${rootPlaceholder}`);
  }

  for (const locale of locales) {
    const appHtml = render(locale);
    const page = getLocalePage(locale);
    const pageHtml = applyPageMetadata(
      indexHtml.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`),
      page
    );
    const outputPath = locale === "en"
      ? indexPath
      : path.join(projectRoot, "dist", locale, "index.html");

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, pageHtml);
  }
} finally {
  await viteServer.close();
}

function applyPageMetadata(html, page) {
  return html
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}" dir="${page.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeHtml(page.ogDescription)}" />`)
    .replace(
      /<meta property="og:type" content="website" \/>/,
      `<meta property="og:type" content="website" />\n    <meta property="og:url" content="${page.url}" />\n    <link rel="canonical" href="${page.url}" />\n    ${renderAlternateLinks(page.locale)}`
    )
    .replace(
      /"description": "[^"]*"/,
      `"description": ${JSON.stringify(page.schemaDescription)}`
    );
}

function renderAlternateLinks(currentLocale) {
  const alternateLinks = locales.map((locale) => {
    const page = getLocalePage(locale);

    return `<link rel="alternate" hreflang="${page.lang}" href="${page.url}" />`;
  });
  const defaultPage = getLocalePage("en");

  alternateLinks.push(`<link rel="alternate" hreflang="x-default" href="${defaultPage.url}" />`);

  return alternateLinks.join("\n    ");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
