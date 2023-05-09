'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //代理设置，解决跨域问题，弊端是会更改session的会话ID  
      '/gdssfw':{//监听对象
        target: 'https://ssfw.gdcourts.gov.cn',//目标接口地址和端口
        //https://ssfw.gdcourts.gov.cn/ssfwpt/count2/countTodayWsla
        //target: 'http://120.24.78.160:8890',//目标接口地址和端口
        changeOrigin:true,
        pathRewrite:{
          '^/gdssfw':'/'//转接的代理地址
        }
      },
     
      '/bigdata': {//监听对象
        target: 'http://114.132.217.15',//目标接口地址和端口
        changeOrigin: true,
        pathRewrite: {
          '^/bigdata': '/bigdata'//转接的代理地址
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8888, // 统一使用8888端口作为前端组开发端口
    autoOpenBrowser: true,//自动打开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    //useEslint: true,//使用Eslint，自定义规则未出来前，统一使用jslint


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  configureWebpack: {
      externals: {
          "AMap": "AMap"
      }
  },
  globals: {
    AMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
