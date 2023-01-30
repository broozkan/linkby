const path = require('path');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const Sequelize = require('sequelize');
const service = require('feathers-sequelize');
const { Account, Click, Campaign } = require('./models');

const sequelize = new Sequelize('sequelize', '', '', {
    dialect: 'postgres',
    logging: false
});


const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());
app.use(express.errorHandler());

app.use('/accounts', service({
    Model: Account
}));

app.use('/clicks', service({
    Model: Click
}));

app.use('/campaigns', service({
    Model: Campaign
}));

app.use(express.errorHandler());

Account.sync({ force: true }).then(() => {
    app.service('accounts').find({
        query: {
            '$account.active$': true,
        }
    })

    app.service('accounts').create({
        text: 'Account created on server'
    })
});

Click.sync({ force: true }).then(() => {
    app.service('clicks').find()
    app.service('clicks').create({
        text: 'Click created on server'
    })
});

Campaign.sync({ force: true }).then(() => {
    app.service('campaigns').find()
    app.service('accounts').create({
        text: 'Campaign created on server'
    })
});

const port = 3030;

app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
});