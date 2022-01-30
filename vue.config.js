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
        }
    }
}