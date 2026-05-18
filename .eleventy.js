module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets")
    eleventyConfig.addCollection('posts', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md');
    });
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};