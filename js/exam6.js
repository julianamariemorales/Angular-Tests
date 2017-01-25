var app6 = angular.module('app6', []);

app6.controller('pListCtrl', function($scope) {

  $scope.paintings = [
    {painter: "Mark Rothko", title: "Royal Red and Blue", purchased: false},
    {painter: "Peter Paul Ruben", title: "Massacre of the Innocents", purchased: false},
    {painter: "Pierre-Auguste Renoir", title: "Le Moulin de la Galette", purchased: false},
    {painter: "Andy Warhol", title: "Turquoise Marilyn", purchased: false},
    {painter: "Paul Cézanne", title: "The Card Players", purchased: false},

  ];

  // Receives the new item entered in the input box and puts
  // it on the end of the array
  $scope.addPainting = function(newPainter, newPaintTitle) {

    // Check that the input box has a value
    if(!(newPainter === undefined || newPainter === "")){
      $scope.paintings.push({
        painter: newPainter, title: newPaintTitle, purchased: false
      });
      $scope.missingNewItemError = "";
    } else {

      // Show an error if no item was entered
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };



app6.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Derek",
    lName: "Banas",
    street: "123 Main St",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 };


}); //end of controller

}); //end of moduke
