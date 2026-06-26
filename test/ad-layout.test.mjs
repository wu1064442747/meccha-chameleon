import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const appSource = readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const stylesSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

function readSlotSize(slotName) {
  const slotMatch = appSource.match(
    new RegExp(`${slotName}: \\{[\\s\\S]*?width: (\\d+),[\\s\\S]*?height: (\\d+)`)
  );

  assert.ok(slotMatch, `Expected ${slotName} ad slot dimensions to be present`);

  return {
    width: Number(slotMatch[1]),
    height: Number(slotMatch[2])
  };
}

function readCssRule(selector) {
  const ruleMatch = stylesSource.match(new RegExp(`\\${selector} \\{([\\s\\S]*?)\\n\\}`));

  assert.ok(ruleMatch, `Expected ${selector} CSS rule to be present`);

  return ruleMatch[1];
}

test("left and right side ads use matching tall slot dimensions", () => {
  assert.deepEqual(readSlotSize("right"), readSlotSize("left"));
});

test("desktop layout reserves the same width for both side ads", () => {
  assert.match(appSource, /const desktopSideAdWidth = 160 \+ 160 \+ 24;/);
  assert.match(
    stylesSource,
    /grid-template-columns: minmax\(160px, auto\) minmax\(0, var\(--game-body-width\)\) minmax\(160px, auto\);/
  );
});

test("left and right side ad containers use matching CSS dimensions", () => {
  const leftRule = readCssRule(".ad-slot-left");
  const rightRule = readCssRule(".ad-slot-right");

  assert.match(leftRule, /width: 160px;/);
  assert.match(leftRule, /min-height: 600px;/);
  assert.match(rightRule, /width: 160px;/);
  assert.match(rightRule, /min-height: 600px;/);
});
