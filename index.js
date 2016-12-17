function addPeople(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return katzDeliLine;
}

function takeANumber(katzDeliLine, newPerson) {
  var newArray = addPeople(katzDeliLine, newPerson);

  for (var i = 0; i < newArray.length; i++) {
    var names = newArray[i];

    if (newPerson === names) {
    return "Welcome, " + newPerson + ". You are number " + (i + 1) + " in line."
    }
  }
}

function removePerson(katzDeliLine) {
  katzDeliLine.shift();
  return katzDeliLine;
}


function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var sentence = "Currently serving " + katzDeliLine[0] + ".";
    removePerson(katzDeliLine);
    }
    return sentence;
  }


function removeLastCharacter(sentence) {
    return sentence.slice(0, -1);

 }


function currentLine(katzDeliLine) {
    var sentence = "The line is currently: "

    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    }

  for (var i = 0; i < katzDeliLine.length; i++){
    var name = katzDeliLine[i];
    var newSentence = removeLastCharacter(sentence += (i + 1) + ". " + name + ", ");
  }

    return removeLastCharacter(newSentence);
}
