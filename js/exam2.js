var app2 = angular.module('app2', []);

//Date
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}



app2.controller('ctrl2', function($scope) {

  //$scope.rand1 = Math.floor((Math.random() * 10) + 1);
  //$scope.rand2 = Math.floor((Math.random() * 10) + 1);
  //$scope.rand1 = Math.floor((Math.random() * 10) + 1);
  //$scope.rand2 = Math.floor((Math.random() * 10) + 1);
  $scope.rand1 =randomDate(new Date(2012, 0, 1), new Date());
  $scope.rand2 =randomDate(new Date(2012, 0, 1), new Date());

});

//shakespeare generator
app2.controller('playctrl', function($scope) {

    var splays = [
                  "All's Well That Ends Well (1602)",
                  "Antony and Cleopatra (1606)",
                  "As You Like It (1599)",
                  "Comedy of Errors (1589)",
                  "Hamlet (1600)",
                  "Henry VIII (1612)",
                  "Julius Caesar (1599)",
                  "Love's Labour's Lost (1594)",
                  "Macbeth (1605)",
                  "Romeo and Juliet (1594)",
                  "Winter's Tale (1610)"
                ];

    $scope.splays = splays[Math.floor((Math.random() * 11))];
});

//shakespeare phrases
app2.controller('phrasectrl', function($scope) {

    var sphrases = [
                  "all that glitters isn’t gold",
                  "breathe one’s last",
                  "brevity is the soul of wit",
                  "foregone conclusion",
                  "frailty, thy name is woman",
                  "give the devil his due",
                  "more sinned against than sinning",
                  "primrose path",
                  "the course of true love never did run smooth",
                  "wear one’s heart on one’s sleeve",
                ];

    $scope.sphrases = sphrases[Math.floor((Math.random() * 10))];
});


//new ctrl
//shakespeare phrases
app2.controller('filterctrl', function($scope) {

    $scope.sonnets = [
                    {number:1, title: "From fairest creatures we desire increase"},
                    {number:2, title: "When forty winters shall besiege thy brow"},
                    {number:3, title: "Look in thy glass, and tell the face thou viewest"},
                    {number:4, title: "Unthrifty loveliness, why dost thou spend"},
                    {number:5, title: "Those hours, that with gentle work did frame"},
                    {number:6, title: "Then let not winter's ragged hand deface"},
                    {number:7, title: "Lo! in the orient when the gracious light"},
                    {number:8, title: "Music to hear, why hear'st thou music sadly?"},
                    {number:9, title: "Is it for fear to wet a widow's eye"},
                    {number:10, title: "For shame! deny that thou bear'st love to any"}
                  ];

    $scope.addRow = function(){
                    $scope.number.push({ 'number':$scope.number, 'title': $scope.title});
                  	$scope.title='';
                  };
                  
    $scope.removeRow = function(name){
                  		var index = -1;
                  		var comArr = eval( $scope.title );
                  		for( var i = 0; i < comArr.length; i++ ) {
                  			if( comArr[i].name === name ) {
                  				index = i;
                  				break;
                  			}
                  		}
                  		if( index === -1 ) {
                  			alert( "Something gone wrong" );
                  		}
                  		$scope.title.splice( index, 1 );
                  	};


});
