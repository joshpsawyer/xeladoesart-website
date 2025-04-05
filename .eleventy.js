const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
// const markdownItFootnote = require("markdown-it-footnote");
// const markdownItAbbr = require('markdown-it-abbr');
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/CNAME");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    // eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.setBrowserSyncConfig({
		  files: './_site/css/**/*.css'
    });
  
  	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
      // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("removeWorkDir", (file) => {
      return file.replace('/work/', "/");
    });
  
    eleventyConfig.addFilter("bust", (url) => {
      const [urlPart, paramPart] = url.split("?");
      const params = new URLSearchParams(paramPart || "");
      params.set("v", Math.floor(Date.now() / 1000));
      return `${urlPart}?${params}`;
    });
  
    eleventyConfig.addFilter('sortByTitle', values => {
      return values.slice().sort((a, b) => a.data.indexname.localeCompare(b.data.indexname))
    });

    eleventyConfig.addFilter('sortByDate', values => {
      return values.slice().sort((a, b) => {
        console.log((b.data.page.date - a.data.page.date) ? "GREATER" : "LESSER")
        return b.data.page.date - a.data.page.date;
      })
    });
  
    eleventyConfig.addCollection("myCollectionName", function (collectionApi) {
      // get unsorted items

      return collectionApi.getAll();
    });
  
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      // which file extensions to process
      extensions: 'html',
      // optional, output image formats
      formats: ['jpg', 'webp'],
      // optional, output image widths
      widths: [400, 800, 1024], // 'auto', 
      // optional, attributes assigned on <img> override these values.
      defaultAttributes: {
          loading: 'lazy',
          sizes: '100vw',
          decoding: 'async',
      },
    });
  
    // let markdownLibrary = markdownIt({
    //   html: true,
    //   // breaks: true,
    //   linkify: true,
    //   // typographer: true,
    // })
    // .use(markdownItFootnote)
    // .use(markdownItAbbr);

  
      // markdownLibrary.renderer.rules.footnote_block_open = () => (
      //   '<h2 class="mt-3">References</h4>\n' +
      //   '<section class="footnotes">\n' +
      //   '<ol class="footnotes-list">\n'
      // );
      
      // eleventyConfig.setLibrary("md", markdownLibrary);
  
    // eleventyConfig.addFilter("log", (obj) => {
    //   console.log(obj);
    // });
  
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "_site"
      }
    }
  };