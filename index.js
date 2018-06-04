var pubService = require('./services/pubs.services');

//console.log(pubService.tousPubs());
console.log(pubService.pubsOuverts());

module.exports = {
    services: {
        pubService: pubService
    }
}