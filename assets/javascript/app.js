
// need to get user input to create a button by adding to existing array.
// want to make button produce user input search
// put all the code below inside those buttons.

//Create an array of search terms
//Use for loop to create buttons that will search for new gifs and put to page
//Use user search term to add to array do same thing 
//Input to page for each new search (using a for loop)


//Global Variables =========================================================

//what user put in to be searched
var gifsToDisplay = ["Bob Costas", "Beyonce", "Wine"];


for (var i = 0; i < gifsToDisplay.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var buttonCreation = $("<button>");
    // Adding a class of movie to our button
    buttonCreation.addClass("displayButtons");
    // Adding a data-attribute
    buttonCreation.attr("data-name", gifsToDisplay[i]);
    // Providing the initial button text
    buttonCreation.text(gifsToDisplay[i]);
    // Adding the button to the buttons-view div
    $("#buttonSection").append(buttonCreation);
}

$(".displayButtons").click(function() { 
    console.log("Buttons work2!");
    getGifs();
      
      
    
});
    
//Functions =========================================================================

function getGifs(){


$("#submitButton").click(function () { 
    var userSearchInput = $("#userSearchInput").val().trim();
    console.log("button works!")
    console.log(userSearchInput);

    //Array 
    gifsToDisplay.push(userSearchInput);
    console.log(gifsToDisplay);

    for (var i = 0; i < gifsToDisplay.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var buttonCreation = $("<button>");
        // Adding a class of movie to our button
        buttonCreation.addClass("displayButtons");
        // Adding a data-attribute
        buttonCreation.attr("data-name"+[i], gifsToDisplay[i]);
        // Providing the initial button text
        buttonCreation.text(gifsToDisplay[i]);
        // Adding the button to the buttons-view div
        $("#buttonSection").append(buttonCreation);
    }


var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
var searchTerm = userSearchInput;
var gifParameter = "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
      url: queryURL + searchTerm + gifParameter,
      //url: "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=Costas&limit=25&offset=0&rating=G&lang=en", 
      method: 'GET'
    }).done(function(response) {
      console.log(response);

      /*for (var i = 0; i < gifsToDisplay.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var buttonCreation = $("<button>");
          // Adding a class of movie to our button
          buttonCreation.addClass("displayButtons");
          // Adding a data-attribute
          buttonCreation.attr("data-name", gifsToDisplay[i]);
          // Providing the initial button text
          buttonCreation.text(gifsToDisplay[i]);
          // Adding the button to the buttons-view div
          $("#buttonSection").append(buttonCreation);
      } */

      $(".displayButtons").click(function() { 
          console.log("Buttons work!");
          //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
            var imgUrl = response.data[0].images.fixed_height.url;
            var gifs = $("<img>");
            gifs.attr("src", imgUrl);
            gifs.attr("alt", "cat image");
            
            
            $("#gifDisplaySection").append(gifs);
            $("#gifDisplaySection").append("Rating: ", response.data[0].rating);
          
      });

      //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
      /*var imgUrl = response.data[0].images.fixed_height.url;
      var gifs = $("<img>");
      gifs.attr("src", imgUrl);
      gifs.attr("alt", "cat image");
      
      
      $("#gifDisplaySection").append(gifs);
      $("#gifDisplaySection").append("Rating: ", response.data[0].rating);*/
      
    });
    
});


}






