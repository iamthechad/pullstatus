exports.pullStatus = function(req, res){

    var GitHubApi = require("github");

    var github = new GitHubApi({
        version: "3.0.0"
    });
    github.debug = true;

    github.pullRequests.getMerged({user: req.params.userid, repo: req.params.repo, number: req.params.id}, function (err, body) {
        console.log(err);
        console.log(body);
        if (err) {
            if (err.code == 404) {
                res.sendfile('public/media/not_merged.png');
            }
            else {
                res.send(404, 'Ooops');
            }
        }
        else {
            res.send("Something");
        }
    });
    //client.get('/repos/' + req.params.userid + '/' + req.params.repo + '/pulls/' + req.params.id + '/merge', function (err, status, body) {
    /*client.get('/users/iamthechad', function (err, status, body) {
        console.log(status);
        if (err) {
            console.log(err);
            res.send(404, "No information found for that request")
        }
        res.send(body); //json object
    });*/
    //res.send('/repos/' + req.params.userid + '/' + req.params.repo + '/pulls/' + req.params.id + '/merge');
};