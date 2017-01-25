var app3= angular.module('app3', []);

app3.controller('ctrl3', function($scope){

  $scope.shoppingcart = [
    {item: "Marchesa Ornate Collar Necklace", purchase: false},
    {item: "Salvatore Ferragamo Medium Mara Tote", purchase: false},
    {item: "Pour La Victoire Celina Pointed Toe Block Heel Pumps", purchase: false},
    {item: "Quay Supergirl Mirrored Cat Eye Sunglasses", purchase: false}
  ];

$scope.getList =function(){
  return $scope.showList ? "shopitem -ul.html" : "shopitem -ol.html";
};


});
