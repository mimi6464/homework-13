//GET route with the url/api/friends. will be used to display a JSON OF ALL possible friends

// ===============================================================================
 // LOAD DATA
 // We are linking our routes to a series of "data" sources.
 // These data sources hold arrays of information on table-data, waitinglist, etc.
 // ===============================================================================this is just example
 
 // var tableData 		= require('../data/table-data.js');
 var friendsData 	= require('../data/Friends');
 
 
 // ===============================================================================
 // ROUTING
 // ===============================================================================
 
 module.exports = function (app) {
 	// API GET Requests
 	// Below code handles when users "visit" a page.
 	// In each of the below cases when a user visits a link
 	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
 	// ---------------------------------------------------------------------------
 
 	// app.get('/api/tables', function (req, res) {
 	// 	res.json(tableData);
 	// });
 
 	app.get('/api/friends', function (req, res) {
 		res.json(friendsData);
 	});
 
 	// API POST Requests
 	// Below code handles when a user submits a form and thus submits data to the server.
 	// In each of the below cases, when a user submits form data (a JSON object)
 	// ...the JSON is pushed to the appropriate Javascript array
 	// (ex. User fills out a reservation request... this data is then sent to the server...
 	// Then the server saves the data to the tableData array)
 	// ---------------------------------------------------------------------------
 
 	app.post('/api/friends', function (req, res) {
 	// 	// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
 	// 	// It will do this by sending out the value "true" have a table
 	// 	if (tableData.length < 5) {
 	// 		tableData.push(req.body);
 	// 		res.json(true); // KEY LINE
 	// 	} else { // Or false if they don't have a table
 	// 		waitListData.push(req.body);
 	// 		res.json(false); // KEY LINE
 	// 	}
 	// });
 user x = [3, 3, 5, 4, 4, 5, 2, 4, 5, 5];
 user y = [3, 2, 5, 4, 5, 1, 2, 5, 4, 1];


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


var ans = compareTwoArrays(x, y); 

console.log(ans);
 	// ---------------------------------------------------------------------------
 	// I added this below code so you could clear out the table while working with the functionality.
 	// Don't worry about it!
 
 	app.post('/api/clear', function () {
 		// Empty out the arrays of data
 		friendsData = [];
 		
 
 		console.log(friendsData);
 	});
 };

