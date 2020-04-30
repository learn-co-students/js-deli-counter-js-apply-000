function takeANumber(katzDeliLine, name) {
 var mySentence = ("Welcome, " + name + ". You are number " + (katzDeliLine.length + 1) + " in line.");
 katzDeliLine.push(name);
 return mySentence;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  var theLuckyOne = katzDeliLine[0];
  katzDeliLine.shift();
  return "Currently serving " + theLuckyOne + ".";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  var mySentence = "The line is currently:";
  for (var i = 0; i < katzDeliLine.length; i++) {
    mySentence += " " + (i + 1) + ". " + katzDeliLine[i] + ",";
  }
  return mySentence.substring(0, (mySentence.length - 1));
}