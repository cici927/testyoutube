$( document ).ready(function(){
	
	//submit click handler for search entry
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
		$('#query').val('');
	})
});	
		
	function getRequest(searchTerm) {
		var params = {
			part: 'snippet',
			key: 'AIzaSyB36tMkO65R4SP-lvCMZNFLwKWkT2SYuAo',
			q: searchTerm
		};

		
		var url = "https://www.googleapis.com/youtube/v3/search";

		$.getJSON(url, params, function(data) { 
			showResults(data.items);
			
		}) 
	}

	function showResults(results) {
		var html = "";
		$.each(results, function(index, value) {
			html += '<img src=' + value.snippet.thumbnails.default.url + '>';
			console.log(value.snippet.thumbnails.default.url);
		})
	$("#search-results").html(html);
	
	}


	
			

	//showResults to DOM in thumbnail image
		//start with variable with empty string 
		//loop over data 
			//building up empty string 
		//append results to #search-results div


