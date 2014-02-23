exports.pullStatus = function(req, res){

    var GitHubApi = require("github");

    var github = new GitHubApi({
        version: "3.0.0"
    });

    github.pullRequests.getMerged({user: req.params.userid, repo: req.params.repo, number: req.params.id}, function (err, body) {
        console.log(err);
        console.log(body);
        if (err) {
            if (err.code == 404) {
                res.sendfile('public/media/svg/not_merged.svg');
            }
            else {
                res.send(404, 'Something bad happened');
            }
        }
        else {
            res.sendfile('public/media/svg/merged.svg');
        }
    });
};