
var userSearchInput = $("#userSearchInput").val().trim();
    console.log(userSearchInput);

//var searchArray = [];







//var searchButton = $("#submitButton").click(function() { 
    //console.log(userSearchInput);
    
//});

console.log("test");

var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=83e0322b808940ff8c755f9e308c5537";
var searchTerm = "&q=Costas";

var gifParameter = "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL + searchTerm + gifParameter,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });





