$( document ).ready(function() {
	
	//click handler Function that collects value from form

	$('#search-term').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

//function that loops through objects of user's search to display results upon submit

function getRequest(searchTerm) {
	var params ={
		part: 'snippet',
		key: 'AIzaSyB36tMkO65R4SP-lvCMZNFLwKWkT2SYuAo',
		q: searchTerm
	};	
	
	//url to pass through .getJSON parameters
	url = "https://www.googleapis.com/youtube/v3/search";

	//get request from JSON data
	$.getJSON(url, params, function(data) {
		showResults(data.items);
		console.log(data.items);
	})
	.fail(function(err) {
		console.log("error", err);
	  })
	}

  //Function that appends results to the DOM in thumbnail image

  function showResults(results) {
  	var html = "";
  	$.each(results, function(index, value) {
  		html += '<img src=' + value.snippet.thumbnails.default.url + '>';
  	  console.log(value.snippet.thumbnails.default.url);
  	});
  	$('#search-results').html(html);
  }

