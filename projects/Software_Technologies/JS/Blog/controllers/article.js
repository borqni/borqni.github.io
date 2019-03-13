const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articleArgs = req.body;

        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles!'
        } else if (!articleArgs.title) {
            errorMsg = 'Invalid title!'
        } else if (!articleArgs.content) {
            errorMsg = 'Invalid content!'
        }

        if (errorMsg) {
            res.render('article/create', {
                error: errorMsg,
                title: articleArgs.title,
                content: articleArgs.content,
            });
            return;
        }

        articleArgs.authorId = req.user.id;

        Article
            .create(articleArgs)
            .then(article => {
                res.redirect('/');
            }).catch(err => {
            console.log(err.message);
            res.render('article/create', {error: err.message});
        })
    },

    details: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId, {include: [{model: User}]})
            .then(article => {
                res.render('article/details', article.dataValues)
            });
    },

    editGet: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                res.render('article/edit', article.dataValues)
            });
    },

    editPost: (req, res) => {
        let articleArgs = req.body;
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                article
                    .update(articleArgs)
                    .then(() => {
                        res.redirect('/');
                    })
            });
    },

    deleteGet: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                res.render('article/delete', article.dataValues)
            });
    },

    deletePost: (req, res) => {
        let articleId = req.params.id;

        Article
            .findById(articleId)
            .then(article => {
                article
                    .destroy()
                    .then(() => {
                        res.redirect('/');
                    })
            });
    }
};