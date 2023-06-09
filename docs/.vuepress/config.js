module.exports = {
    title: 'Casual UI',
    description: 'vue2.0UI库',
    themeConfig: {
        sidebar: {
            '/view/': [
                {
                    collapsable: false,
                    children: [ 
                        ['/view/Input','input输入框']
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