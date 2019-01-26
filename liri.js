//Added prescribed variables & modules.
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
//adding required variables & modules.
var moment = require('moment');
var axios = require("axios");
var fs = require("fs");
// begin to take input
var reQuest = process.argv
//assigning an error catch

// basic error message for incomplete input
function ErrMsg() {
    console.log('Please enter a full command! "Node liri.js <command> <target-request>" \n\nTry "Node liri.js HELP" for more detail!')
    break;
};

// function to read the "random.txt" for "do-what-this-says"
function doWhat() {
    var lookie = fs.readFileSync("random.txt").toString();
    //var lookarr = lookie.split(",")
    //console.log(lookarr)
    return lookie
};
// function to log information to "log.txt", designed to include a timestamp/request header, and accept different sized returns 
function logThis(x) {
    var y = "";
    for (h=0;h<x.length;h++){ 
        y += x[h]+"\n";
        console.log(y);
    };
    fs.appendFile("log.txt", "----------\n"+moment().format()+" "+targ+"\n----------\n"+y+"//////////\n", function(err) {
        if (err) {
          return console.log(err);
        }
});
};
//function for axios-based requests, accepts custom inputs
function useAxios() {
    axios.get(BASE+targ+option).then(function(response) {
        return(response.data)
});

function concertThis() {
    if (reQuest.length < 4) {
        ErrMsg()
    }else{
    var BASE = "https://rest.bandsintown.com/artists/"
    var targ = reQuest[3].toLowerCase()
    var option = "/events?app_id=codingbootcamp"
    useAxios()
    var who = (response.data[0].venue.name);
    var where = (response.data[0].venue.city+", "+response.data[0].venue.region);
    var when = moment(response.data[0].datetime).format("MM/DD/YYYY");
    console.log("the band/artist's next appearance is at: \n'"+who+"'\n in "+where+"\n on "+when)
    };
};

axios.get("http://www.omdbapi.com/?t="+targ+"&y=&plot=short&apikey=trilogy")
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
    // console.log("Rotten Tomatoes Rating of the movie.: " + response.data.imdbRating);
     console.log("Country(s) where the movie was produced.: " + response.data.Country);
     console.log("Language(s) of the movie: " + response.data.Language);
    console.log("Plot of the movie: " + response.data.Plot);
     console.log("Actors in the movi: " + response.data.Actors);
});
axios.get("https://rest.bandsintown.com/artists/" + targ + "/events?app_id=codingbootcamp")
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
spotify.search({ type: 'track', query: targ, limit: 2 }, function(err, data) {
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

if (reQuest.length < 3) { ErrMsg()

}else{
    switch(reQuest[2].toLowerCase()) {

        case "concert-this":
        concertThis()
        break;

        case "spotify-this-song":
        spotThis()
        break;

        case "movie-this":
        movieThis()
        break;

        case "do-what-it-says":
        doWhat()
        break;
};
}
// if (qual === "concert-this" ) {
//     console.log("A");
// }else if (qual === "spotify-this-song" ) {
//     console.log("A");
// }else if (qual === "movie-this" ) {
//     console.log("A");
// }else if (qual === "do-what-it-says" ) {
//     console.log("A");
// }