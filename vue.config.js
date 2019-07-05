module.exports = {
    pages: {
        index: {
            entry: './src/pages/Home/main.js',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            entry: './src/pages/Login/main.js',
            title: 'Login',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        register: {
            entry: './src/pages/Register/main.js',
            title: 'Register',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        userlist: {
            entry: './src/pages/Userlist/main.js',
            title: 'Userlist',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
    }
}