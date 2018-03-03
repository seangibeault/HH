console.log("node : " + process.env.NODE_ENV)
console.log(process.env.NODE_ENV.trim() == 'production');
console.log(process.env.NODE_ENV.trim() == 'development');

if (process.env.NODE_ENV.trim() == 'production') {
    module.exports = require('./configureStore.prod');
} else if (process.env.NODE_ENV.trim() == "test") {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}
