// Computes the correct basePath for GitHub Pages.
// - User/organization site: <owner>.github.io -> basePath ""
// - Project site: <owner>.github.io/<repo> -> basePath "/<repo>"
//
// This script prints the basePath and is designed to be used in npm scripts.

import fs from "node:fs";
import path from "node:path";

function readPackageJson() {
  const pkgPath = path.resolve(process.cwd(), "package.json");
  const raw = fs.readFileSync(pkgPath, "utf8");
  return JSON.parse(raw);
}

const pkg = readPackageJson();

const githubRepo = process.env.GITHUB_REPOSITORY; // e.g. "xeno347/my-portfolio"
let repoName = "";

if (githubRepo && githubRepo.includes("/")) {
  repoName = githubRepo.split("/")[1];
} else if (typeof pkg?.repository === "string") {
  // e.g. "git+https://github.com/xeno347/my-portfolio.git"
  const m = pkg.repository.match(/github\.com\/(?:[^/]+)\/([^/.]+)(?:\.git)?/i);
  if (m) repoName = m[1];
} else if (typeof pkg?.repository?.url === "string") {
  const m = pkg.repository.url.match(/github\.com\/(?:[^/]+)\/([^/.]+)(?:\.git)?/i);
  if (m) repoName = m[1];
}

// Fallback to current folder name.
if (!repoName) {
  repoName = path.basename(process.cwd());
}

const isUserSite = repoName.endsWith(".github.io");
const basePath = isUserSite ? "" : `/${repoName}`;

process.stdout.write(basePath);
