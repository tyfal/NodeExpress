var friendData = require(`../data/friends`);

module.exports = function(app) {

    app.get(`/api/friends`, function(req, res) {

        res.json(friendData);

    });

    app.post(`/api/friends`, function(req, res) {

        friendData.push(req.body);

        var bestMatch = {
            friend: {},
            diff: 10000
        };

        friendData.forEach(friend => {

            var diff = 0;

            if (friend !== req.body) {

                for (var i = 0; i < friend.scores.length; i++) {

                    diff += Math.abs(friend.scores[i] - req.body.scores[i]);

                }

                if (diff < bestMatch.diff) {

                    bestMatch.friend = friend;
                    bestMatch.diff = diff;

                }

            }
        });

        res.json(bestMatch.friend);

    })

}
