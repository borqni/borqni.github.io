const Issue = require('../models').Issue;

module.exports = {
    index: (req, res) => {
        Issue.findAll().then(issues => {
            res.render("issue/index", {issues: issues});
        })
    },
	
    createGet: (req, res) => {
        res.render('issue/create');
    },
	
    createPost: (req, res) => {
        let body = req.body.issue;
        Issue.create(body).then((issue) => {
            res.redirect('/');
        });
    },
	
    editGet: (req, res) => {
        let id = req.params.id;
        Issue.findById(id).then(issue => {
            res.render('issue/edit', {issue: issue.dataValues})
        });
    },

    editPost: (req, res) => {
        let id = req.params.id;
        let body = req.body.issue;
        Issue.findById(id).then(issue => {
            issue.updateAttributes(body)
                .then(() => res.redirect('/'));
        });
    },

    deleteGet: (req, res) => {
        let id = req.params.id;
        Issue.findById(id)
            .then(issue => res.render('issue/delete', {issue: issue.dataValues}));
    },
	
    deletePost: (req, res) => {
        let id = req.params.id;
        Issue.findById(id)
            .then(issue => {
                issue.destroy()
                    .then(() => res.redirect('/'));
            });
    }
};