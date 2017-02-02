var katzDeli = [];

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);  

  return "Welcome, " + name + ". " + "You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine) {

    return katzDeliLine < 1 ? "There is nobody waiting to be served!" :
    "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine) {
  var customerArray = [];

  if(katzDeliLine.length < 1) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var customer = katzDeliLine[i];
      var placeInLine = i + 1;
      customerArray.push(placeInLine + ". " + customer);
    }
    return "The line is currently: " + customerArray.join(", ")
  }
}
