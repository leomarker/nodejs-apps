import path from "path";
import { URL } from "url";
import slug from "slug";

export function urlToFilename(url) {
  const parsedUrl = new URL(url);

  const urlToPath = parsedUrl.pathname
    .split("/")
    .filter((component) => {
      return component !== "";
    })
    .map((component) => {
      return slug(component, { remove: null });
    })
    .join("/");

  const filename = path.join(parsedUrl.hostname, urlToPath);
  if (path.extname(filename).match(/htm/)) {
    filename += ".html";
  }

  console.log(filename);

  return filename;
}
