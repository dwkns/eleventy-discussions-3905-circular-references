import { consolePlus } from 'eleventy-plugin-console-plus'
/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default (eleventyConfig) => {
  eleventyConfig.addPlugin(consolePlus, {
    logToHtml: true,
    logToTerminal: false,
    logToBrowserConsole: false

  });

  eleventyConfig.addCollection("posts", (collection) => {
    let posts = collection.getFilteredByGlob("src/posts/*.md");
    // Filter and sort posts as needed
    return posts 
  });
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
  },
};