//Added prescribed variables.
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var https = require('https');
//added a constructor due to the strange coding of the prescribed "var spoifty" line. Added a function to create an API call.
function Spotify(obj) {
    this.id = obj.id;
    this.secret = obj.secret;
    this.spotCall = function() {
        console.log("testthismess/q="+this.id+"&"+this.secret+"&stuff\n");
    };
};
var spotify = new Spotify(keys.spotify);
console.log(spotify.id)


//previous log produces an "undefined" after it's output. ASK WHY THIS IS!


// begin to take input
var reQuest = process.argv;
//assigning an error catch

var qual = reQuest[2].toLowerCase();
var targ = reQuest[3].toLowerCase();

//line up the language interpritaion code
if (qual === "concert-this" ) {
    
}else if (qual === "spotify-this-song" ) {
    console.log(spotify.spotCall());
}else if (qual === "movie-this" ) {
    $.ajax({
        url: "https://www.omdbapi.com/?t= &y= &plot=short&apikey=",
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });
    console.log("A");
}else if (qual === "do-what-it-says" ) {
    console.log("A");
}
console.log("Fin")
//var inquirer = require("inquirer");

// Make it so liri.js can take in one of the following commands:
// *concert-this
 //node liri.js concert-this <artist/band name here>
// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// *spotify-this-song
//node liri.js spotify-this-song '<song name here>'
// *movie-this
//If no song is provided then your program will default to "The Sign" by Ace of Base.
// node liri.js movie-this '<movie name here>'

// This will output the following information to your terminal/bash window:

//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
//If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// *do-what-it-says
function ErrMsg() {
console.log('Please enter a full command! "Node liri.js <command> <target-request>" \n\nTry "Node liri.js HELP" for more detail!')
};