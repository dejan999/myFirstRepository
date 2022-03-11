angular.module("myModule", [])
    .controller("myController", function ($scope) {
        var employees=[
            {firstName:"Ben",lastName:"Hilton",gender:"Male",salary:5500},
            {firstName:"Ana",lastName:"Hilton",gender:"Female",salary:1200},
            {firstName:"John",lastName:"Hilton",gender:"Male",salary:9500},
            {firstName:"Smit",lastName:"Hilton",gender:"Male",salary:5600}


        ];
        console.log(employees)
        $scope.employees=employees;
    })