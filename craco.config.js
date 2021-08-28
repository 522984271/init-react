const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'pink' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        //针对antd实现按需打包 ： 根据import来打包
        plugins: [['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',   //自动打包相关的样式
        }]],
    }
};
