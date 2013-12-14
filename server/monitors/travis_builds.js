var _ = require('underscore')
  , Travis = require('travis-ci')
  , travis = new Travis({version: '2.0.0'})
  , json = require('../utils/json')
  , CONFIG;

function history(req, res) {
    var owner = req.query.owner
      , repo = req.query.repo
      ;
    travis.builds({
        owner_name: owner,
        name: repo
    }, function(err, travisResponse) {
        json.render(travisResponse, res);
    });
}

module.exports = function(config) {
    CONFIG = config;
    return {
        history: history
    };
};