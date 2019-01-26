var moment = require('moment');
//Added prescribed variables.
//require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
//var keys = require("./keys.js");
//targ need to comefrom a user variable
var targ = "elton john"

function logThis(x) {
    var y = "";
    for (h = 0; h < x.length; h++) {
        y += x[h] + "\n";
        console.log(y);
    };
    fs.appendFile("log.txt", "----------\n" + moment().format() + " "+qual+"/'"+targ+"'\n----------\n" + y + "//////////\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
};
// function logThis(x) {

//     var y = "";
//     for (h = 0; h < x.length; h++) {
//         y += x[h] + "\n";
//         console.log(y);
//     };
//     fs.appendFile("log.txt", "----------\n" + moment().format() + " " + targ + "\n----------\n" + y + "//////////\n", function (err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
// };
if (targ) {
var qual = "duck"
concertThis()
}

function useAxios(BASE,option) {
    axios.get(BASE+targ+option).then(function(response) {
        var makethiswork = response.data
       // console.log(response.data)
        concertThis2(makethiswork)
}).catch(function (error) {
            console.log(error);
          });
};

function concertThis() {
    // if (reQuest.length < 4) {
    //     ErrMsg()
    // }else{
    var BASE = "https://rest.bandsintown.com/artists/"
    //var targ = reQuest[3].toLowerCase()
    var option = "/events?app_id=codingbootcamp"
    console.log(BASE)
    useAxios(BASE,option)
};

    function concertThis2(x){
    var who = (x[0].venue.name);
    var where = (x[0].venue.city+", "+x[0].venue.region);
    var when = moment(x[0].datetime).format("MM/DD/YYYY");
    console.log("the band/artist's next appearance is at: \n'"+who+"'\nin "+where+"\non "+when)
    blarg = [who,where,when]
    logThis(blarg)
    };

// function axman(){
// axios.get("https://rest.bandsintown.com/artists/" + targ + "/events?app_id=codingbootcamp")
//     .then(function (response) {
//         var blarg = []
//         var who = (response.data[0].venue.name);
//         blarg.push(who)
//         var where = (response.data[0].venue.city + ", " + response.data[0].venue.region);
//         blarg.push(where)
//         var when = moment(response.data[0].datetime).format("MM/DD/YYYY");
//         blarg.push(when)
//         // console.log(response.data);
//         console.log("#########################################################################################")
//         // console.log(what)
//         console.log("the band/artist's next appearance is at '" + who + "' in " + where + " on " + when)

//         console.log(blarg)
//         logThis(blarg)
//     }
//     ).catch(function (error) {
//         console.log(error);
//       });
// }
// a bonus might be to make a multiple-response cascade is asked!

//axios.get("http://www.omdbapi.com/?t=the+goonies&y=&plot=short&apikey=trilogy")
//.then(  function(response) {
    // Then we print out the imdbRating
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   }
// );
