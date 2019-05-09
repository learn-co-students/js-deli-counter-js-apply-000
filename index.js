function takeANumber ( lineofpeople, name) {
  lineofpeople.push(name);
  return "Welcome, " + name +"."+  " You are number " + lineofpeople.length   + " in line.";
  
}
//var katzDeliLine = ["Veronica"];
//console.log(takeANumber(katzDeliLine, "Adam"));
//console.log(takeANumber(katzDeliLine, "I"));
//console.log(takeANumber(katzDeliLine, "J"));

// var whatever = [];
 // whatever.push("Adam is cool");
 // whatever.push("Ingrid is the best");
 // console.log(whatever);
 // whatever.shift();
 // console.log(whatever);
 function nowServing(lineofpeople) {
  if (lineofpeople.length === 0){
    return "There is nobody waiting to be served!";
  }else {
    var firstPerson= lineofpeople[0];
    lineofpeople.shift();
    return "Currently serving " + firstPerson + ".";
  }
 }
//var katzDeliLine = ["Consuelo", "K"];

//console.log(nowServing(katzDeliLine));
//console.log(katzDeliLine);

function currentLine(lineofpeople) {
  if (lineofpeople.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = "The line is currently: ";
    
    for (var counter = 0; counter < lineofpeople.length; counter++) {
      var name = lineofpeople[counter];

      message = message + (counter + 1) + ". " + name;

      if (counter !== lineofpeople.length - 1) { // not the last person
        message = message + ", ";
      }
    }

    return message;
  }
}