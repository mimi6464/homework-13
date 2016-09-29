var friendsData = [{
	    		name: "jaguars animal",
	    		photo: "http://www.panorama.com.ve/__export/1466519882459/sites/panorama/img/mundo/2016/06/21/jaguar.jpg",
	    		scores: [3, 3, 5, 4, 4, 5, 2, 5, 4, 5]
				
	    }, {	
	    		name: "giraffe",
	    		photo: "http://az616578.vo.msecnd.net/files/2016/03/26/635946098822760398-1397872308_giraffe-01.jpg",
	    		scores: [1, 2, 3, 4, 5, 1, 1, 1, 1, 2] 
	    }, {
	    		name: "gorilla",
	    		photo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Male_gorilla_in_SF_zoo.jpg",
	    		scores: [3, 2, 5, 4, 5,1, 1, 4, 5, 4] 
	    }, {				
	    		name: "lion",
	    		photo: "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/67639.jpg",
	    		scores:  [1, 2, 3, 3, 3, 1, 3, 1, 2, 4]
	    }, {		

	    		name: "dolphin",
	    		photo: "https://support.wwf.org.uk/templates/bamboo/images/species__dolphin-image.jpg",
	    		scores: [2, 3, 4, 5, 1, 2, 3, 1, 5, 1] 
	    }, 		

 }];

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


var ans = findTheOne(me);

console.log(ans);

 module.exports = friendsData;
}
];
