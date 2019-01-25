var Spotify = require('node-spotify-api');
//var moment = require('moment');
//Added prescribed variables.
require("dotenv").config();
var axios = require("axios");
//var fs = require("fs");
var keys = require("./keys.js");
//var https = require('https');
var targ ="elton john"
https://api.spotify.com/v1/tracks/{id}
axios.get("https://api.spotify.com/v1/search/q=" + targ + "&type=track/events?app_id=codingbootcamp")
//   .then(function(response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
.then(function(response) {
        var who = (response.data[0].venue.name);
        var where = (response.data[0].venue.city+", "+response.data[0].venue.region);
        var when = moment(response.data[0].datetime).format("MM/DD/YYYY");
       // console.log(response.data);
        console.log("#########################################################################################")
       // console.log(what)
        console.log("the band/artist's next appearance is at '"+who+"' in "+where+" on "+when)
    }
);


//axios.get("http://www.omdbapi.com/?t=the+goonies&y=&plot=short&apikey=trilogy")
//.then(  function(response) {
    // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );
