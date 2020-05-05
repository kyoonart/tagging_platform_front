module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://tagapi.whip1ash.cn/", // target host
                changeOrigin: true, // needed for virtual hosted sites
                pathRewrite: {
                    "^/api": "" // rewrite path
                }
            }
        }
    }
}