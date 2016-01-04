exports = module.exports = function(app,mongoose) {
    app.api = {};

    app.api.callback = function(error, responseData) {

        if (error) {
            console.log(error);
            app.api.callback.res.json({ error: error, code: -1, success: false});
        } else {
            console.log(responseData);
            app.api.callback.res.json({  responseData: responseData, code: 1, success: true });
        }
    };



    require('./getApi')(app,mongoose);
    require('./deleteApi')(app,mongoose);
    require('./insertApi')(app,mongoose);
    require('./updateApi')(app,mongoose);


};