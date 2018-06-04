var pubs = require('../mocks/pubs.json');
const moment = require('moment');

function tousPubs(){
    return pubs;
}

function pubsOuverts(){
    var res = [];
    pubs.forEach(pub => {
        if(pub['openDays'].includes(moment().format('dddd')))
            res.push(pub['name']);
    });
    return res;
}

module.exports = {
    tousPubs: tousPubs,
    pubsOuverts: pubsOuverts
};