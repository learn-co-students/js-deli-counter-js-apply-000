var katzDeli = []; // empty Deli start of morning.

      function takeANumber(katzDeli, name) {
        katzDeli.push(name);
        return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
      } 

      function nowServing(katzDeli) {

        if (katzDeli.length === 0) {
          return "There is nobody waiting to be served!";
        }
        while (katzDeli.length > 0) {
          return (`Currently serving ${katzDeli.shift()}.`);
        } 
      }

function currentLine(katzDeli) {

    var lineArr = [];

    if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length; i++) {
      lineArr.push(` `+[i+1]+`. `  + katzDeli[i])
         } return("The line is currently:" + lineArr);
     }
     else {
      return( "The line is currently empty.");
     }
   }