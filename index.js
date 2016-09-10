var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(name + ", you are number " + katzDeliLine.length " in line.")
};

function nowServing() {
  if (katzDeliLine.length > 0) {
    return("Currently serving " + katzDeli.shift());
  } else {
    return("There is nobody waiting to be served!");
  };
};

function currentLine() {
  var text = "The line is currently: "
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i ++) {
      text += i + 1 + ". " + katzDeliLine[i]);
    };
    return (text);
  } else {
    return("The line is currently empty.")
  };
};
