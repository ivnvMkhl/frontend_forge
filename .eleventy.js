const copyPaths = {
    'node_modules/bootstrap/dist/js/bootstrap.min.js': 'bootstrap/bootstrap.min.js',
    'node_modules/bootstrap/dist/css/bootstrap.min.css': 'bootstrap/bootstrap.min.css',
    'src/*.css': 'css',
};

const njkFilters = {
    getPath: (path) => {
        const relativePath = process.env.RELATIVE_PATH || '';
        return relativePath + path;
    },
};

module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy(copyPaths);

    Object.entries(njkFilters).forEach(([filterName, filter]) => eleventyConfig.addNunjucksFilter(filterName, filter));

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        },
        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ['md', 'njk', '11ty.js'],
    };
};
