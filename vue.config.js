module.exports = {
    pages: {
        index: {
            entry: './src/pages/Home/main.js',
            path: '/home',
            title: 'Home',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            entry: './src/pages/Login/main.js',
            path: '/login',
            title: 'Login',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        register: {
            entry: './src/pages/Register/main.js',
            path: '/register',
            title: 'Register',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        userlist: {
            entry: './src/pages/Userlist/main.js',
            path: '/userlist',
            title: 'Userlist',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
    }
}