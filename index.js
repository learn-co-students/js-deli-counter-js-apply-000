//newPerson in line is fed into function
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);

//interpolated message that welcomes the newPerson
  var welcomeMessage =  `Welcome, ` + newPerson + `. You are number ` + katzDeli.length + ` in line.`;

//returns value welcomeMessage 
    return welcomeMessage;
}

//////

function nowServing(katzDeliLine) {
  var emptyLine = "There is nobody waiting to be served!";
//return string for an empty line
  if (katzDeliLine.length === 0) {
    return emptyLine;
  }
// removes the person at the beginning of the line out of the array and announces that they are next to be served  
  else { 
    var nextUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ` + nextUp + `.`;
  }
}

//////

// returns the string value for an empty line 

function currentLine(deliLine) {
  var line = "";
  var welcome = `The line is currently: `;
    if (deliLine.length === 0) {
      return "The line is currently empty.";
    }
 
 // line variable reinitiatlizes the return value at the end of the loop and incremenets ontop of it each time through 
 else {
    for (var i = 0; i < deliLine.length; i++) {
      line = line + (i + 1) + `. ` + deliLine[i];
     
// this makes sure there are no extra names selected (e.g. undefined)     
      if (i < (deliLine.length - 1))  {
        line = line + `, `;
      } 
    }
    return (welcome + line);
  }  
}  
