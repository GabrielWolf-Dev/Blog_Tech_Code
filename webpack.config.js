const path = require('path');
const Webpack = require('webpack');
const jsPath = './js/';

module.exports = {
    entry: {
        home: jsPath + 'home.js',
        about: jsPath + 'about.js',
        post: jsPath + 'post.js',
        posts: jsPath + 'posts.js',
        credits: jsPath + 'credits.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new Webpack.optimize.ModuleConcatenationPlugin(),
    ],
}