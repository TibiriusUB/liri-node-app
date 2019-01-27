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
var targ = ""
// basic error message for incomplete input
function ErrMsg() {
    console.log('Please enter a full command! "Node liri.js <command> <target-request>" \n\nTry "Node liri.js HELP" for more detail!')
    
};
//basic help routine
function HELPME(){
    console.log("LIRI help;\n'node' 'liri' <command> <target-request>\nVaild commands =  [concert-this] [spotify-this-song] [movie-this] [do-what-it-says] [help]\n <target-request> is your search topic\nsearch logs can be found in 'log.txt' in the liri.js file directory\n Enjoy! :)")
};
// function to read the "random.txt" for "do-what-this-says"
function doWhat() {
    var lookie = fs.readFileSync("random.txt").toString();
    var lookarr = lookie.split(",")
    qual = lookarr[0]
    reQuest[3] = lookarr[1]
    switch(qual) {

        case "concert-this":
        concertThis()
        break;

        case "spotify-this-song":
        spotThis()
        break;

        case "movie-this":
        movieThis()
        break;
    };
    
};
// function to log information to "log.txt", designed to include a timestamp/request header, and accept different sized returns 
function logThis(z,targ) {
    var y = "";
    for (h=0;h<z.length;h++){ 
        y += z[h]+"\n";
    };
    fs.appendFile("log.txt", "----------\n"+moment().format()+" "+qual+"/'"+targ+"'\n----------\n"+y+"//////////\n", function(err) {
        if (err) {
          return console.log(err);
        }
});
};
//function for axios-based requests, accepts custom inputs
function useAxios(check, BASE, targ, option) {
    axios.get(BASE+targ+option).then(function(response) {
        var buck = response.data
        if (check) {
            movieThis2(buck)
        }else{
            concertThis2(buck)

        };

}).catch(function (error) {
    console.log(error);
  });
};
function concertThis() {
    if (reQuest.length < 4) {
        ErrMsg()
    }else{
    var check = false
    var BASE = "https://rest.bandsintown.com/artists/";
    var targ = reQuest[3].toLowerCase();
    var option = "/events?app_id=codingbootcamp";
    useAxios(check, BASE, targ, option)
    };
};

function concertThis2(x) {
    var who = (x[0].venue.name);
    var where = (x[0].venue.city+", "+x[0].venue.region);
    var when = moment(x[0].datetime).format("MM/DD/YYYY");
    console.log("The band/artist's next appearance is at: \n'"+who+"'\n in "+where+"\n on "+when)
    blarg = [who,where,when];
    logThis(blarg,targ)
};

function movieThis() {
    if (reQuest.length < 4) {
        reQuest[3] = "Mr Nobody";
    }
    var check = true
    var BASE = "http://www.omdbapi.com/?t=";
    var targ = reQuest[3].toLowerCase();
    var option = "&y=&plot=short&apikey=daa82c8e";
    useAxios(check, BASE, targ, option)
};

function movieThis2(a) {
    var what = a.Title;
    var when = a.Year;
    var how = a.imdbRating;
    var RoRate = a.Ratings
    for (i=0; i< RoRate.length; i++) {
        if (RoRate[i].Source === "Rotten Tomatoes") {
            var tomHow = RoRate[i].Value;
        };
    };
    var where = a.Country;
    var huh = a.Language;
    var why = a.Plot;
    var who = a.Actors;
    console.log("Film Title: "+what+"\nYear Released: "+when+"\nIMDB Rating: "+how+"\nRotten Tomatoes Score: "+tomHow+"\nCountriy(s) Filmed in: "+where+"\nLanguage: "+huh+"\nPlot Summary: "+why+"\nActors: "+who)
    blarg = [what,when,how,tomHow,where,huh,why,who]
    logThis(blarg,targ)
};

function spotThis() {
    if (reQuest.length < 4) {
        var targ = "the sign ace of base";
    }else{    
        var targ = reQuest[3].toLowerCase();
    };
    
spotify.search({ type: 'track', query: targ, limit: 2 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var who = (data.tracks.items[0].artists[0].name); 
    var what =(data.tracks.items[0].name);
    var why = (data.tracks.items[0].preview_url);
    var where = (data.tracks.items[0].album.name);
    console.log("Artist: "+who+"\nTrack: "+what+"\nPreview Link: "+why+"\nAlbum: "+where)
    blarg = [who,what,why,where]
    logThis(blarg,targ)
});

};


if (reQuest.length < 3) { ErrMsg()

}else{
    var qual = reQuest[2].toLowerCase()
    switch(qual) {

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

        case "help":
        HELPME()
        break;

        default:
        console.log("You must enter a vaild command! Try 'node liri help' for more info!")
    };
};
