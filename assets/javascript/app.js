
//Input to page
//Create an array of search terms
//Use for loop to create buttons that will search for new gifs and put to page
//Use user search term to add to array do same thing 
//Input to page for each new search (using a for loop)

var searchArray = [];

    

$("#submitButton").click(function () { 
    var userSearchInput = $("#userSearchInput").val().trim();
    console.log("button works!")
    console.log(userSearchInput);

    //Array 
    searchArray.push(userSearchInput);
    console.log(searchArray);


var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
var searchTerm = userSearchInput;

var gifParameter = "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
      url: queryURL + searchTerm + gifParameter,
      //url: "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=Costas&limit=25&offset=0&rating=G&lang=en", 
      method: 'GET'
    }).done(function(response) {
      console.log(response);

      //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
      var imgUrl = response.data[0].images.fixed_height.url;
      var gifs = $("<img>");
      gifs.attr("src", imgUrl);
      gifs.attr("alt", "cat image");
      
      
      $("#gifDisplaySection").append(gifs);
      $("#gifDisplaySection").append("Rating: ", response.data[0].rating);
      
    });
    
});









