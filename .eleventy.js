// Le filtre pour la date est celui de Karly Nelson trouvé sur : https://karlynelson.com/posts/how-to-handle-dates-in-11ty/

module.exports = function(eleventyConfig) {
    // Filtre pour la date
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return dateObj.toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    });
    // Fin du filtre pour la date
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