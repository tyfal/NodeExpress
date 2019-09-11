var path = require(`path`);

module.exports = function (app) {

    app.get(`/`, function (req, res) {

        res.sendFile(path.join(__dirname, `../public/home.html`));

    },

    app.get("/:filename", function (req, res) {

        switch (req.params.filename) {

            case `home`:
                res.sendFile(path.join(__dirname, `../public/home.html`));
                break;

            case `survey`:
                res.sendFile(path.join(__dirname, `../public/survey.html`));
                break;

            default:
                res.sendFile(path.join(__dirname, `../public/404.html`));

        }

    }));

};