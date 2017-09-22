


//Global Variables =========================================================
var gifsToDisplay = ["Bob Costas", "Beyonce", "Wine", "Madonna"];







//Functions =========================================================================

//what user put in to be searched
function createDisplayButtons() {
    for (var i = 0; i < gifsToDisplay.length; i++) {

        var gifDisplayButtons = $("<button>");
        gifDisplayButtons.addClass("displayButtons");
        gifDisplayButtons.attr("data-name", gifsToDisplay[i]);
        gifDisplayButtons.text(gifsToDisplay[i]);

        $("#buttonSection").append(gifDisplayButtons);
    }
}



// function used to display gifs


    var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
    var searchTerm = userSearchInput;
    var gifParameter = "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL + searchTerm + gifParameter,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        
        
    });






$(document).ready(function () {
   

$(".displayButtons").click(function () {
    var buttonThatWasClicked = $(this).attr("data-name");
    console.log(buttonThatWasClicked);


    var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
    var searchTerm = buttonThatWasClicked;
    var gifParameter = "&limit=10&offset=0&rating=G&lang=en";
        $.ajax({
          url: queryURL + searchTerm + gifParameter,
          
          method: 'GET'
        }).done(function(response) {
          console.log(response);
          
    
           
          
    
        });
});
})



/*$("#submitButton").click(function () { 
    var userSearchInput = $("#userSearchInput").val().trim();
    console.log("button works!")
    console.log(userSearchInput);

    
    gifsToDisplay.push(userSearchInput);
    console.log(gifsToDisplay);

    for (var i = 0; i < gifsToDisplay.length; i++) {
        
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
      
      method: 'GET'
    }).done(function(response) {
      console.log(response);


       
      for (var i =0; i < response.data.length; i++) {
      $(".displayButtons").click(function() { 
          console.log("Buttons work!");
          //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
            var imgUrl = response.data[i].images.fixed_height.url;
            var gifs = $("<img>");
            gifs.attr("src", imgUrl);
            gifs.attr("alt", "cat image");
            
            
            $("#gifDisplaySection").append(gifs);
            $("#gifDisplaySection").append("Rating: ", response.data[i].rating);
          
      });

      
      var imgUrl = response.data[i].images.fixed_height.url;
      var gifs = $("<img>");
      gifs.attr("src", imgUrl);
      gifs.attr("alt", "searched image");
      
      
      $("#gifDisplaySection").append(gifs);
      $("#gifDisplaySection").append("Rating: ", response.data[i].rating);
      
    }

    });
    
}); */



    





// Process ============================================
createDisplayButtons();

$("#submitButton").click(function () {
    var userSearchInput = $("#userSearchInput").val().trim();

    gifsToDisplay.push(userSearchInput);

    //$(userSearchInput).attr("data-name", gifsToDisplay.length);
    
    console.log(gifsToDisplay);

    $("#buttonSection").empty();
    createDisplayButtons();
})