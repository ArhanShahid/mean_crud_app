exports = module.exports = function (app) {

    app.get('/api/get', app.api.getData);
    app.post('/api/insert', app.api.insertData);
    app.post('/api/update/:id', app.api.updateData);
    app.delete('/api/delete/:id', app.api.deleteData);


    app.get('*', function(req, res) {
        res.sendfile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


};