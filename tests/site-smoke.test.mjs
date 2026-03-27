import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const rootFiles = [
  "astro.config.mjs",
  "package.json",
  "src/content.config.ts",
  "src/pages/index.astro",
  "src/pages/contact.astro",
  "src/pages/blog/[slug].astro",
];

test("critical project files exist", () => {
  for (const relativePath of rootFiles) {
    assert.ok(existsSync(relativePath), `Expected ${relativePath} to exist`);
  }
});

test("legacy content config has been removed", () => {
  assert.equal(existsSync("src/content/config.ts"), false);
});

test("blog posts contain frontmatter titles", () => {
  const postsDir = "src/content/posts";
  const posts = readdirSync(postsDir).filter((file) => file.endsWith(".md"));

  assert.ok(posts.length > 0, "Expected at least one markdown post");

  for (const postFile of posts) {
    const source = readFileSync(join(postsDir, postFile), "utf8");
    assert.match(source, /^---[\s\S]*^title:\s.+$/m, `${postFile} is missing a frontmatter title`);
  }
});
