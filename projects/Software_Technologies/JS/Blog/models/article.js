const Sequelize = require('sequelize');
const User = require('../models').User;

module.exports = (sequelize) => {
    const Article = sequelize.define('Article', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false,
            required: true
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: true,
            required: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            required: true,
            defaultValue: Sequelize.NOW
        },
// {
//         timestamps:false
//     }
    });


    Article.associate = function (models) {
        Article.belongsTo(models.User, {
            foreignKey: 'authorId',
            targetKey: 'id'
        })
    };

    return Article;
};