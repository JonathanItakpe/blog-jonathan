/**
 * The Index of Routes
 */

module.exports = function (app) {
    // The posts route
    app.use('/posts', require('./routes/posts.routes'));
}

