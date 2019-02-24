const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    const Project = sequelize.define("Project", {
            Title: {
                type: Sequelize.TEXT,
                required: true,
                allowNull: false
            },
            Description: {
                type: Sequelize.TEXT,
                required: true,
                allowNull: false
            },
            Budget: {
                type: Sequelize.INTEGER,
                required: true,
                allowNull: false
            }
        }, {timestamps: false}
    )

    return Project;
};


