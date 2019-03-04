
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  
  var welcomeMessage =  `Welcome, ` + newPerson + `. You are number ` + katzDeli.length + ` in line.`;

    return welcomeMessage;
}

//////

function nowServing(katzDeliLine) {
  var emptyLine = "There is nobody waiting to be served!";
  
  if (katzDeliLine.length === 0) {
    return emptyLine;
  }
  else { 
    var nextUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ` + nextUp + `.`;
  }
}

//////

function currentLine(deliLine) {
  var line = "";
  var welcome = `The line is currently: `;
    if (deliLine.length === 0) {
      return "The line is currently empty.";
    }
 else {
    for (var i = 0; i < deliLine.length; i++) {
      line = line + (i + 1) + `. ` + deliLine[i];
      if (i < (deliLine.length - 1))  {
        line = line + `, `;
      } 
    }
    return (welcome + line);
  }  
}  
