const path = require("path");

const resources = ["../../node_modules/bootstrap/scss/_mixins.scss", "../../node_modules/bootstrap/scss/_functions.scss", "../../node_modules/bootstrap/scss/_variables.scss", "_mixins.scss", "_variables.scss", "style.scss" ];

module.exports = resources.map(file => path.resolve(__dirname, file));