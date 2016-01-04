app.controller('viewController', function($scope,requestService,toaster) {

    $scope.showEdit =false;

    $scope.name = {
        first:null,
        last:null
    };
    $scope.editname = {
        _id:null,
        first:null,
        last:null
    };
    function getNames(){
        requestService
            .getNames()
            .get({},function(res){
                res.$promise.then(function(data){
                    $scope.list = data.responseData;
                })
            });
    }
    getNames();

    $scope.save = function(user){

        if(user.first && user.last){

            requestService
                .insertNames()
                .save({
                    f_name: user.first,
                    l_name:user.last
                },
                function(res){
                    $scope.name.first = null;
                    $scope.name.last = null;
                    toaster.pop('success', "Success", "Name Added Successfully");
                    getNames();
                });

        }else{
            toaster.pop('error', "Error", "Invalid or Empty Field");
        }
    };
    $scope.enableEdit = function(name){

        $scope.showEdit =true;
        $scope.editname._id = name._id;
        $scope.editname.first = name.f_name;
        $scope.editname.last = name.l_name;

    };

    $scope.edit = function(name){
        console.log(name);
        if(name.first && name.last && name._id){

            requestService
                .updateName()
                .save({
                    id:name._id
                },
                {
                    f_name: name.first,
                    l_name:name.last
                },
                function(res){
                    console.log(res);
                    $scope.showEdit =false;
                    toaster.pop('success', "Success", "Name Updated Successfully");
                    getNames();
                });

        }else{
            toaster.pop('error', "Error", "Invalid or Empty Field");
        }
    };
    $scope.delete = function(name){
        requestService
            .deleteName()
            .delete({
                id:name._id
            },
            function(res){
                toaster.pop('success', "Success", "Name Deleted Successfully");
                getNames();
            })
    }



});