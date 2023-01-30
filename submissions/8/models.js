const Account = sequelize.define('account', {
    id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
});

const Campaign = sequelize.define('campaign', {
    id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    account_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
});

const Click = sequelize.define('click', {
    id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    campaign_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
});


export {
    Account,
    Click,
    Campaign
}