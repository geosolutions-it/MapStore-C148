/* eslint-disable no-console */
const path = require("path");

const extractThemesPlugin = require('./MapStore2/themes.js').extractThemesPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    base: __dirname,
    dist: path.join(__dirname, "dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
};

module.exports = env => {
    const theme = env && env.theme;
    console.log("compiling for theme " + (theme || "default"));
    return require('./MapStore2/buildConfig')(
        {
            'MapStore-C148': path.join(__dirname, "js", "app"),
            'MapStore-C148-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
            'MapStore-C148-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
        },
        {
            "themes/default": path.join(__dirname, "assets", "themes", "default", "theme.less"),
            "themes/surveye": path.join(__dirname, "assets", "themes", "surveye", "theme.less")
        },
        paths,
        extractThemesPlugin,
        true,
        "/mapstore/dist/",
        '.MapStore-C148',
        [
            new HtmlWebpackPlugin({
                // TODO: couldn't use title in HtmlWebpackPlugin options. try to find a way to use instead of this workaround and do the same for favicon(actually it uses a copy in pom.xml)
                template: path.join(__dirname, (theme ? (theme + "-") : "") + 'indexTemplate.html'),
                chunks: ['MapStore-C148'],
                inject: true,
                hash: true
            }),
            new HtmlWebpackPlugin({
                // TODO: couldn't use title in HtmlWebpackPlugin options. try to find a way to use instead of this workaround and do the same for favicon(actually it uses a copy in pom.xml)
                template: path.join(__dirname, (theme ? (theme + "-") : "") + 'embeddedTemplate.html'),
                chunks: ['MapStore-C148-embedded'],
                inject: true,
                hash: true,
                filename: 'embedded.html'
            }),
            new HtmlWebpackPlugin({
                // TODO: couldn't use title in HtmlWebpackPlugin options. try to find a way to use instead of this workaround and do the same for favicon(actually it uses a copy in pom.xml)
                template: path.join(__dirname, (theme ? (theme + "-") : "" ) + 'apiTemplate.html'),
                chunks: ['MapStore-C148-api'],
                inject: 'head',
                hash: true,
                filename: 'api.html'
            })
        ]
    );
};
