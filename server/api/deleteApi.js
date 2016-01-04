exports = module.exports = function(app, mongoose) {
    app.api.deleteData = function (req, res) {

        app.api.callback.res = res;

        console.log('API : api/get');
        console.log(req.body);

        app.db.models.users.findOne({_id: req.params.id}, function (err, data) {
            if (err) {
                app.api.callback(err);
            }
            else {
                app.api.callback(err, data);
                data.remove(function (err, deleteResponse) {
                    if (err) {
                        app.api.callback(err);

                    } else {
                        res.json({status: true, data: deleteResponse});
                    }

                });
            }


        });

    };
};