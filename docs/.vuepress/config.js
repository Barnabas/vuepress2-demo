module.exports = {
    extendsPageOptions: ({ filePath }) => {
        if (filePath?.startsWith('_posts/')) {
            return {
                frontmatter: {
                    permalinkPattern: '/:year/:month/:day/:slug.html',
                },
            }
        }
        return {}
    },
}