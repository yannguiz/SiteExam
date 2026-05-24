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
    
    // Config de johnstronic modifié à l'aide de l'IAg pour s'adapter  mes besoins.
    // https://joshtronic.com/2025/09/07/eleventy-category-tag-pages/ 
    eleventyConfig.addCollection('allTags', function(collectionApi) {
    const tags = new Set();
    collectionApi.getFilteredByGlob('src/blog/posts/**/*.md').forEach((post) => {
        if (post.data.tags) {
        post.data.tags.forEach((tag) => tags.add(tag));
        }
    });
    return [...tags].sort();
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