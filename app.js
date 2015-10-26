app = angular.module('BrandsApp', []);

app.controller("BrandsCtrl", function($scope) {


  $scope.columnList = [
    'Square','Stripe','Paypal','Apple Pay','Google Wallet'
  ];

  $scope.itemFullList = '';

  $scope.brand1 = 'Paypal';
  $scope.enable1 = true;



  $scope.updateBrand = function ($event, num_brand ,name)
  {
    switch(num_brand) {
        case 1:
            $scope.brand1 = name;
            $scope.enable1 = true;
            break;
    }
  }

  $scope.updateCancel = function ($event, num_brand ,name)
  {
    switch(num_brand) {
        case 1:
            $scope.enable1 = false;
            break;
    }
  }


});
