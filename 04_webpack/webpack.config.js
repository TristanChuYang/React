var path = require("path");//引入相对路径
module.exports = {
    entry: './src/script/main.js', //入口
    output: {
        path: path.resolve(__dirname, "./dist/js"),//打包路径
        filename: "bundle.js"//打包后的文件名
    }
}