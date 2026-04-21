export function getBasePath() {
  // Next.js replaces NEXT_PUBLIC_* at build time for client bundles.
  // For local dev it is typically unset (""), and for GitHub Pages it's "/<repo>".
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function withBasePath(path: string) {
  const basePath = getBasePath();

  if (!path.startsWith("/")) {
    return path;
  }

  if (!basePath) {
    return path;
  }

  return `${basePath}${path}`;
}
