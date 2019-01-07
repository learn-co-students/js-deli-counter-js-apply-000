function takeANumber(katzDeliLine, personName) {
  // push person to passed in array and capture index
  katzDeliLine.push(personName);
  return "Welcome, " + personName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = line.shift();
  }
  return  "Currently serving " + person + ".";
}

function currentLine(line) {
  var str = "The line is currently: ";
  var str2 = "";
  if (line.length === 0) {
    return  "The line is currently empty.";
  } else {
    line.forEach(function(person, index) {
    	if (index === line.length - 1) {
    		str2 += index+1 + ". " + person;
    	} else {
    		str2 += index+1 + ". " + person + ", ";
    	}
    })
  }
  return str.concat(str2);
}
