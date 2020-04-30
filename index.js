function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPlace = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPlace}.`
  }
}

function currentLine(curLine) {
  var nameList = "";
  if (curLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < curLine.length; i++) {
      nameList += `${i + 1}. ${curLine[i]}`;
      if (curLine.length !== (i + 1)) {
        nameList += ", ";
      }
    }
    return `The line is currently: ${nameList}`;
  }
}


