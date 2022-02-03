const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    pages:{
      index:{
          entry:'src/main.js',
          title:'supermall'
      }
    },
    configureWebpack: {
        resolve: {
            alias: {
                assets:'@/assets',
                common:'@/common',
                components:'@/components',
                views:'@/views',
                network:'@/network',
            }
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    }
}