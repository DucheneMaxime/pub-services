var pubService = require('./services/pubs.services');

console.log(pubService.tousPubs());
console.log(pubService.pubsOuverts('Wednesday'));

module.exports = {
    services: {
        pubService: pubService
    }
}