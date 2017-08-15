
var ngApp=angular.module("myApp",[]);

//CREATE CONTROLLERS
ngApp.controller("spacecraftController",function($scope){

    //ATTACH OBJECT TO SCOPE
    $scope.spacecraft={name:'Casini',propellant:'Laser Beam',destination:'Andromeda'};
});

ngApp.controller("galaxyController",function($scope){
    //ATTACH OBJECT TO SCOPE
    $scope.galaxy={name:'Messier 81',distance:'10 million lightyears'};
});

//END OF FILE