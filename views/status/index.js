exports.pullStatus = function(req, res){
    var github = require('github-basic');

    github.buffer('GET', '/repos/:owner/:repo/pulls/:number/merge', {owner: req.params.userid, repo: req.params.repo, number: req.params.id}, function (err, response) {
        if (err) {
            if (err.code == 404) {
                res.sendfile('public/media/not_merged.png');
            }
            else {
                res.send(404, 'Something bad happened');
            }
        }
        else {
            res.sendfile('public/media/merged.png');
        }
    });
};