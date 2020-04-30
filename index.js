var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"

// Function: takeANumber
function takeANumber(katzDeliLine, name) {
  var position;
  var addAndGet = katzDeliLine.push(name);
  console.log("addAndGet: => " + addAndGet);

  return "Welcome, " + name + ". You are number " + addAndGet + " in line.";
}

// Function: nowServing
function nowServing(katzDeliLine) {


  // deli nowServing returns the line is empty when no on is on line:
  // Expected undefined to equal 'There is nobody waiting to be served!'

  // katzDeliLine[0]

  if (katzDeliLine.length > 0) {
    var myVal = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + myVal + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }

}

// Function: currentLine
function currentLine(katzDeliLine) {

if (katzDeliLine.length > 0) {
  var myVal = katzDeliLine[0];

  var myList = "";

  // for (var member in katzDeliLine) {
  //   var position = 1;
  //   myList += position + '. ' + katzDeliLine[member] + ' ';
  //   position++;
  // }

  katzDeliLine.forEach(function(item, index) {

    var myLength = katzDeliLine.length;

    myList += index + 1 + '. ' + item;

    myLength--;

    if (myLength > 1) {
      myList +=', ';
    }

  });

  myList = myList.slice(0,-2);

  var myReturn = 'The line is currently: ' + myList;
  return myReturn;
} else {
  return 'The line is currently empty.';
}

}
