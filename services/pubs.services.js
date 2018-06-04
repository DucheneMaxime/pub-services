var pubs = require('../mocks/pubs.json');

function tousPubs(){
    return pubs;
}

function pubsOuverts(jour){
    var res = [];
    pubs.forEach(pub => {
        if(pub['openDays'].includes(jour))
            res.push(pub['name']);
    });
    return res;
}

module.exports = {
    tousPubs: tousPubs,
    pubsOuverts: pubsOuverts
};