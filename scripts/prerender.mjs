import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

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
  const appHtml = render();
  const indexHtml = await readFile(indexPath, "utf8");

  if (!indexHtml.includes(rootPlaceholder)) {
    throw new Error(`Expected ${indexPath} to contain ${rootPlaceholder}`);
  }

  await writeFile(
    indexPath,
    indexHtml.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`)
  );
} finally {
  await viteServer.close();
}
