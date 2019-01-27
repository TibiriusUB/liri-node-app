var Spotify = require('node-spotify-api');
//var moment = require('moment');
//Added prescribed variables.
require("dotenv").config();
var axios = require("axios");
//var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
   
//var https = require('https');
var targ ="mr+nobody"


axios.get("http://www.omdbapi.com/?t="+targ+"&y=&plot=short&apikey=daa82c8e")
.then(  function(response) {
    //Then we print out the imdbRating
    
    console.log("Title of the movie.: " +response.data.Title );
    //console.log(response.data)
     console.log("Year the movie came out.: " + response.data.Year);
     console.log("IMDB Rating of the movie.: " + response.data.imdbRating);
     var RoRate = response.data.Ratings
     for (i=0; i< RoRate.length; i++) {
         if (RoRate[i].Source === "Rotten Tomatoes") {
             console.log("Rotten Tomatoes Rating of the movie.: " +RoRate[i].Value)
         };
     };
    
     console.log("Country(s) where the movie was produced.: " + response.data.Country);
     console.log("Language(s) of the movie: " + response.data.Language);
    console.log("Plot of the movie: " + response.data.Plot);
     console.log("Actors in the movi: " + response.data.Actors);
});

//https://api.spotify.com/v1/tracks/{id}
//axios.get("https://api.spotify.com/v1/search/q=" + targ + "&type=track/events?app_id=codingbootcamp")
//   .then(function(response) {
// spotify.search({ type: 'track', query: targ, limit: 2 }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }

// //  console.log(data.tracks.items);
//    console.log(data.tracks.items[0].artists[0].name); 
//    console.log(data.tracks.items[0].name);
//    console.log(data.tracks.items[0].preview_url);
//    console.log(data.tracks.items[0].album.name);
// //   console.log(JSON.stringify(data.tracks.items[0]));
//    });
//   Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from

// If no song is provided then your program w
// .then(function(response) {
//         var who = (response.data[0].venue.name);
//         var where = (response.data[0].venue.city+", "+response.data[0].venue.region);
//         var when = moment(response.data[0].datetime).format("MM/DD/YYYY");
//        // console.log(response.data);
//         console.log("#########################################################################################")
//        // console.log(what)
//         console.log("the band/artist's next appearance is at '"+who+"' in "+where+" on "+when)
//     }
// );

 
