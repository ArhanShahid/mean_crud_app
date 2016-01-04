exports = module.exports = function(app, mongoose) {
    app.api.insertData = function(req,res){

        app.api.callback.res = res;

        console.log('API : api/register');
        console.log(req.body);

        var user = new app.db.models.users();

        user.f_name = req.body.f_name;
        user.l_name = req.body.l_name;

        user.save(function(err,data){
            if(err) {
                console.log("error in saving the data");
                app.api.callback(err);
            }
            else{
                app.api.callback(err,data);
            }
        });
    };
};