var app5 = angular.module('app5', []);

app5.controller ('ctrl5', function($scope){

  $scope.paintings = [
    {painter: "Mark Rothko", title: "Royal Red and Blue", purchase: false},
    {painter: "Peter Paul Ruben", title: "Massacre of the Innocents", purchase: false},
    {painter: "Pierre-Auguste Renoir", title: "Le Moulin de la Galette", purchase: false},
    {painter: "Andy Warhol", title: "Turquoise Marilyn", purchase: false},
    {painter: "Paul Cézanne", title: "The Card Players", purchase: false},

  ];

  //add painting
  $scope.addPainting=function(newPainter){

    //if painting info is not blank, save
    if (!($scope.newPainter === undefined || $scopenewPainter === "")){
      $scope.paintings.push({
        painter : $scope.newPainter,
        title : $scope.newPaintTitle,
        purchased: false});

        $scope.missingNewPaintingError = "";

    //if blank, show error
    }else {
        $scope.missingNewPaintingError = "Please fill out all fields";
    }

 };

});

  /*
  $scope.addPainting = function(newPainting){
    if (!(newPainter === undefined || newPainter === "")){
      $scope.paintings.push ({
        title: newPainter, painter: newPaintTitle, purchased: false
      });

      $scope.missingNewPaintingError = "";

    }else {
      $scope.missingNewPaintingError = "Please fill out all fields";
    }
  };

});
*/
