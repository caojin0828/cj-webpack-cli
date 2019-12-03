'use strict'

// css3属性兼容自动补全
let Autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        Autoprefixer({
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
};