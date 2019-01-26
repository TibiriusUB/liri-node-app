var Spotify = require('node-spotify-api');
//var moment = require('moment');
//Added prescribed variables.
require("dotenv").config();
var moment = require('moment');
//var axios = require("axios");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//var https = require('https');
var targ = doWhat()
console.log(targ + "?")
function doWhat() {
    var lookie = fs.readFileSync("random.txt").toString();
    var lookarr = lookie.split(",")
    console.log(lookarr)
    return lookarr[1]
};
function logThis(x) {

    var y = "";
    for (h = 0; h < x.length; h++) {
        y += x[h] + "\n";
        console.log(y);
    };
    fs.appendFile("log.txt", "----------\n" + moment().format() + " " + targ + "\n----------\n" + y + "//////////\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
};

//console.log(data)
//var targ = ""
//https://api.spotify.com/v1/tracks/{id}
//axios.get("https://api.spotify.com/v1/search/q=" + targ + "&type=track/events?app_id=codingbootcamp")
//   .then(function(response) {
SpotTheSong()
function SpotTheSong() {
    spotify.search({ type: 'track', query: targ, limit: 2 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        blarg = []
        console.log(data.tracks.items[0].artists[0].name);
        blarg.push(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        blarg.push(data.tracks.items[0].name);
        console.log(data.tracks.items[0].preview_url);
        blarg.push(data.tracks.items[0].preview_url);
        console.log(data.tracks.items[0].album.name);
        blarg.push(data.tracks.items[0].album.name);
        console.log(blarg);
        logThis(blarg)
    });
};
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



//axios.get("http://www.omdbapi.com/?t=the+goonies&y=&plot=short&apikey=trilogy")
//.then(  function(response) {
    // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// 
