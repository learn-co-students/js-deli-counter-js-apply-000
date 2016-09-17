var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(name + ", you are number " + katzDeliLine.length " in line.");
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return("Currently serving " + katzDeliLine.shift());
  } else {
    return("There is nobody waiting to be served!");
  };
};

function currentLine(katzDeliLine) {
  var lineText = '';
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i ++) {
      lineText += " " + i + 1 + ". " + katzDeliLine[i]);
    };
    return ("The line is currently:" + lineText);
  } else {
    return("The line is currently empty.");
  };
};
