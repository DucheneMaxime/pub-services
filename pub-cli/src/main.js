var pubs = require('pub-services').services;

function getListPubs(){
    pubs.getListPubs();
}

function getListOpenPubs(){
    pubs.getListOpenPubs();
}

module.exports = {
    getListPubs: getListPubs,
    getListOpenPubs: getListOpenPubs
}