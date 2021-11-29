const base_prefix = '/';
module.exports = {
    devServer: {
        port: 6601,
        proxy: {
            [base_prefix]: {
                target: "http://127.0.0.1:8080",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    ["^"+base_prefix]: ""
                },
            }
        }
    },
}