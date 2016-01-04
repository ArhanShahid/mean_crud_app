exports = module.exports = function(app, mongoose) {
    app.api.updateData = function(req,res) {

        app.api.callback.res = res;

        console.log('API : api/update');
        console.log(req.body);
        console.log("req.params.id");
        console.log( req.params.id);

        app.db.models.users.findOne({_id: req.params.id}, function (err, data) {
            if (err) {
                app.api.callback(err);
            }
            else {
                data.f_name = req.body.f_name;
                data.l_name = req.body.l_name;

                data.save(function (err, data) {
                    if (err) {
                        console.log("error in saving the data");
                        app.api.callback(err);

                    }
                    else {
                        app.api.callback(err, data);
                    }
                });
            }
        });
    };
};