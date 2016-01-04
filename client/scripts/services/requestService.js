app.factory('requestService',function($resource,$rootScope){


    var _getNames = function(){
        return $resource('/api/get');
    };

    var _insertNames = function(){
        return $resource('/api/insert');
    };

    var _updateName = function(){
        return $resource('/api/update/:id',{id:'@id'});
    };

    var _deleteName = function(){
        return $resource('/api/delete/:id',{id:'@id'});
    };

    return{
        'getNames':_getNames,
        'insertNames':_insertNames,
        'updateName':_updateName,
        'deleteName':_deleteName
    }
});
