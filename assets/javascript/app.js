
//Input to page
//Create an array of search terms
//Use for loop to create buttons that will search for new gifs and put to page
//Use user search term to add to array do same thing 
//Input to page for each new search (using a for loop)


//Global Variables =========================================================
var gifsToDisplay = ["Bob Costas", "Beyonce", "Wine", "Madonna"];


//what user put in to be searched
function displayButtons() {
    for (var i = 0; i < gifsToDisplay.length; i++) {

        var createInitialButtons = $("<button>");
        createInitialButtons.addClass("displayButtons");
        createInitialButtons.attr("data-name" + [i], gifsToDisplay[i]);
        createInitialButtons.text(gifsToDisplay[i]);

        $("#buttonSection").append(createInitialButtons);

        $(".displayButtons").click(function () {
            console.log("Buttons work!");
            displayGifs();
        });
    }
}




//Functions =========================================================================





// function used to display gifs
function displayGifs() {

    var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
    var searchTerm = userSearchInput;
    var gifParameter = "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL + searchTerm + gifParameter,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            $(".displayButtons").click(function () {
                console.log("Buttons work!");
                //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
                var imgUrl = response.data[i].images.fixed_height.url;
                var gifs = $("<img>");
                gifs.attr("src", imgUrl);
                gifs.attr("alt", "search image");


                $("#gifDisplaySection").append(gifs);
                $("#gifDisplaySection").append("Rating: ", response.data[i].rating);

            });

            //need to save gif to returned to a variable and then convert to image element. Then put that in append to page
            var imgUrl = response.data[i].images.fixed_height.url;
            var gifs = $("<img>");
            gifs.attr("src", imgUrl);
            gifs.attr("alt", "searched image");


            $("#gifDisplaySection").append(gifs);
            $("#gifDisplaySection").append("Rating: ", response.data[i].rating);

        }
    });
}



$("#submitButton").click(function () {
    var userSearchInput = $("#userSearchInput").val().trim();
    console.log(userSearchInput);

    gifsToDisplay.push(userSearchInput);
    console.log(gifsToDisplay);


    /*var newButton = $("<button>");
    newButton.addClass("displayButtons");
    newButton.attr(userSearchInput);
    newButton.text(userSearchInput);
    $("#buttonSection").append(newButton); */
    $("#buttonSection").empty();
    displayButtons();


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
displayButtons();





