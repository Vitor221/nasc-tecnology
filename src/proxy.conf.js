const PROXY_CONFIG = [
    {
        context: [
            '/usersubscribe',
        ],
        target: "https://api-nasc-tecnology.onrender.com",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/": ""
        }
    }
]

module.exports = PROXY_CONFIG;