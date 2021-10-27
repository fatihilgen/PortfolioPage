const webpack =require('webpack');
const path = require('path')

module.exports={
    entry:{
        app:['js/initApp.js','js/app.js']
    },
    output : {
        path : path.join(__dirname, "../dist/assets/js/"),
        filename : "app.bundle.js"
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.js', '.jsx']
      },
    devServer : {
        contentBase : "../dist"
    },

}