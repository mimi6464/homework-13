//GET route with the url/api/friends. will be used to display a JSON OF ALL possible friends

// ===============================================================================
 // LOAD DATA
 
 // ========================================================================
 var friendsData 	= require('../data/friends.js')
 var storeArray   = require('../data/store.js');
 
 // ===============================================================================
 // ROUTING
 // ===============================================================================
 
 module.exports = function (app) {
 	// API GET Requests
 
 	app.get('/api/friends', function (req, res) {
 		res.json(friendsData);
 	});
 
 	
 
 	// API POST Requests
	 
 	app.post('/api/friends', function (req, res) {
 	// 	// Note the code here. Our "server" will respond to requests and let users know if they have a table or not
    storeArray.push(req.body.scores);
 	

 function compareTwoArrays(arr1, arr2){
  var result = 0;
  
  for(var i=0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      if(arr1[i] > arr2[i]){
        result += (arr1[i] - arr2[i]);
      } else{
        result += (arr2[i] - arr1[i]);
      }
    }
  }
  return result;
}



function findTheOne(user){
  var scoresUnsorted = [];
  var scoresSort = [];
  for(var i=0; i<friendsData.length; i++) {
    scoresSort.push(compareTwoArrays(user.scores, friendsData[i].scores));
  }
  
  scoresSort.forEach(function(item){
    scoresUnsorted.push(item);
  });

  var sorted = scoresSort.sort(function(a, b){
    return a - b;
  });

  var theIndex = scoresUnsorted.indexOf(sorted[0]);

  return friendsData[theIndex].name;
}
  res.json(findTheOne(friendsData[friendsData.length-1]));
    
  });


  // API GET Requests
  app.get('/api/friends', function(req, res){
    res.json(friendsData);  
  });
  

  // API POST Requests
  app.post('/api/friends', function(req, res){
      friendsData.push(req.body);
      res.json(true); // KEY LINE
  });


  // resets everything
  app.post('/api/clear', function(req, res){
    // Empty out the arrays of data
    friendsData = [
      {
        "name" :  "tsion",
        "photo": "https://s-media-cache-ak0.pinimg.com/236x/8d/a6/cf/8da6cfe5c7116c1a03de6ddfcdb2d267.jpg",
        "scores": [3, 3, 5, 4, 4, 5, 2, 4, 5, 5]
      }
    ];

  })
}


 





}


 



 
 	app.post('/api/clear', function () {
 		// Empty out the arrays of data
 		friendsData = [];
 		
 
 		console.log(friendsData);
 	});
 };

