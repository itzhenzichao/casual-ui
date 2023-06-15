module.exports = {
    title: 'Casual UI',
    description: 'vue2.0UI库',
    base:'/casual-ui-web/',
    themeConfig: {
        sidebar: {
            '/view/': [
                {
                    collapsable: false,
                    children: [ 
                        ['/view/Input','input输入框'],
                        ['/view/Select','select下拉框'],
                        ['/view/Icon','icon图标']
                    ]
                }
                ],
        }
    },
    configureWebpack: {
        // resolve: {
        //   alias: {
        //     '@src': resolve('src'),
        //     '@docs': resolve('docs'),
        //     'vue$': 'vue/dist/vue.esm.js',
        //     '@': resolve('src'),
        //   }
        // },
      }
  }