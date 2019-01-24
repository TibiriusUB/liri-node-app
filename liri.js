//Added prescribed variables.
require("dotenv").config();
var keys = require("./keys.js");
//added a constructor due to the strange coding of the prescribed "var spoifty" line. Added a function to create an API call.
function Spotify(obj) {
    this.id = obj.id;
    this.secret = obj.secret;
    this.spotCall = function() {
        console.log("testthismess/q="+this.id+"&"+this.secret+"&stuff");
    };
};
var spotify = new Spotify(keys.spotify);
console.log(spotify.id)

console.log(spotify.spotCall());
//previous log produces an "undefined" after it's output. ASK WHY THIS IS!
console.log("Fin")

// begin to take input
var reQuest = process.argv
//assigning an error catch
for (i=0;i<reQuest.length;i++){

}
if (typeof reQuest[2] === "undefined") {
    console.log('Please enter a full command! "Node liri.js <command> <target-request>" \n\nTry "Node liri.js HELP" for more detail!')
}else{
var qual = reQuest[2].toLowerCase()
var targ = reQuest[3].toLowerCase()
console.log(qual,targ)
if (qual === "concert-this" ) {
    console.log("A");
}else if (qual === "spotify-this-song" ) {
    console.log("A");
}else if (qual === "movie-this" ) {
    console.log("A");
}else if (qual === "do-what-it-says" ) {
    console.log("A");
}
};
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