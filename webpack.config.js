module.exports = {
    entry: {
        "index": "./src/build/index.js",
        
        "prepare-works": "./src/build/building/common/prepare-works.js",
        "ground-works": "./src/build/building/common/ground-works.js",
        "common-build-works": "./src/build/building/common/common-build-works.js",
        "contractor-functions": "./src/build/building/common/contractor-functions.js",

        "ext-water-net": "./src/build/building/ext-networks/ext-water-net.js",
        "ext-col-net": "./src/build/building/ext-networks/ext-col-net.js",
        "ext-warm-net": "./src/build/building/ext-networks/ext-warm-net.js",
        "ext-gas-net": "./src/build/building/ext-networks/ext-gas-net.js",
        "ext-elec-net": "./src/build/building/ext-networks/ext-elec-net.js",

    },
    output: {
        path: __dirname + "/build/",
        filename: "[name].entry.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              include: /\.pug/,
              // pass options to pug as a query ('pug-html-loader?pretty') 
              loader: 'pug-html-loader'
            }
        ]
    }
};