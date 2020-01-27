function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var message = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  return message;
}

function nowServing(katzDeliLine) {
  var message = "";
  if (katzDeliLine.length === 0) {
    message = "There is nobody waiting to be served!";
  } else {
    message = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return message;
}

function currentLine(katzDeliLine) {
  var counter = 1;
  var message = "The line is currently: "
  if (katzDeliLine.length === 0) {
    message = "The line is currently empty."
  } else {
    while (katzDeliLine.length > 0) {
      if (katzDeliLine.length > 1) {
        message += counter + ". " + katzDeliLine[0] + ", ";
        counter++;
      } else {
        message += counter + ". " + katzDeliLine[0];
      }
      katzDeliLine.shift();
    }
  }

  
  return message;
}