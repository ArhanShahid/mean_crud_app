exports = module.exports = function(app, mongoose) {
    app.api.getData= function (req, res) {

        app.api.callback.res = res;


        console.log('API : api/get');
        console.log(req.body);

        app.db.models.users.find({}, function (err, data) {
            if (err) {
                app.api.callback(err);
            }
            else {
                console.log("data");
                console.log(data);

                app.api.callback(err, data);
            }
        });

    };
};
