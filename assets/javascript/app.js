
// Global Variables =======================================================================
var gifsToDisplay = ["Beyonce", "Tom Cruise", "Wine", "Katy Perry", "Bruno Mars", "Prince", "Tom Brady", "Bacon", "Justin Bieber", "Future"];



// Functions =================================================================

function displayButtons() {
    $("#buttonSection").empty();

    for (var i = 0; i < gifsToDisplay.length; i++) {
        var gifButtons = $("<button>");
        gifButtons.addClass("gifButton");
        gifButtons.attr("data-name", gifsToDisplay[i]);
        gifButtons.text(gifsToDisplay[i]);
        $("#buttonSection").append(gifButtons);
    }
}

$("#submitButton").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#userSearchInput").val().trim();
    gifsToDisplay.push(userInput);
    displayButtons();
});

function displayGifs() {
    var searchTerm = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=10";
    var gifObjectReturned;
    var activatedGif;
    var gifStandard;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var gifDiv = $("<div class='gif'></div>");

        for (var i = 0; i < 10; i++) {
            var gifReturnedRating = response.data[i].rating;
            var ratingParagraph = $("<p>").text("Rating: " + gifReturnedRating);
            gifDiv.append(ratingParagraph);

            gifObjectReturned = response.data[i].images.original_still.url;
            activatedGif = response.data[i].images.downsized.url;
            gifStandard = $("<img>").attr({ "src": gifObjectReturned, "gifStandard": gifObjectReturned, "gifAnimated": activatedGif, "gifStatus": "still" });
            gifDiv.append(gifStandard);
        }
        // This clears the document of old gifs before appending w/ new gifs. If want all the gifs pressed then should remove the empty method: 
        $("#gifDisplaySection").empty();
        
        $("#gifDisplaySection").prepend(gifDiv);
    });
}









$(document).on("click", ".gifButton", displayGifs);


$(document).on("click", "img", toggleGifStatus);


//Grabbing individual gif and activating that gif or deactivating
function toggleGifStatus(event) {
    var gifStatus = $(this).attr("gifStatus");
    if (gifStatus === "still") {
        $(this).attr("src", $(this).attr("gifAnimated"));
        $(this).attr("gifStatus", "animate");
    } else {
        $(this).attr("src", $(this).attr("gifStandard"));
        $(this).attr("gifStatus", "still");
    }
}


// App Mechanics =======================================================================================

displayButtons();
