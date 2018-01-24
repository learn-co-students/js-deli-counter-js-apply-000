/*Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept the current line of people,
katzDeliLine, along with the new person's name as parameters.
The function should return their position in line. And don't go
being too programmer-y and give them their index. These are normal
people. If they are 7th in line, tell them that. Don't get their
hopes up by telling them they are number 6 in line.
*/

//var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name);
  var position = index + 1;
  var message = "Welcome, " + name + ". You are number " + position + " in line."

  return message;
}

/*Build a function nowServing. This function should return the first
person in line and then remove that individual from the line.
If there is nobody in line, it should return "There is nobody
waiting to be served!"*/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var personserving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + personserving + ".";
  }
}

/*Build a function currentLine that returns the current line.
For example, if katzDeliLine is currently ["Ada", "Grace"],
currentLine(katzDeliLine) would return "The line is currently: 1.
Ada, 2. Grace". If there is nobody in line, it should return "The
line is currently empty."*/

function currentLine(katzDeliLine) {
  var people = "";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) {
        people += i+1 + ". " + katzDeliLine[i];
      } else {
        people += i+1 + ". " + katzDeliLine[i] + ", ";
      }
    }
  }

  return "The line is currently: " + people;
}
