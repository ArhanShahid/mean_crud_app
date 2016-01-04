exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var UserSchema = new Schema({
        f_name                    : String,
        l_name                     : String
    });

    app.db.model('users',UserSchema);

};
