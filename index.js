function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
};

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var answer = "Currently serving " + katzDeliLine[0] + ".";
  katzDeliLine.shift();
  return answer;
};

function currentLine(katzDeliLine) {
  var order = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  };
  for (var i = 0; order.length < katzDeliLine.length; i++) {
    order.push((i + 1) + ". " + katzDeliLine[i]);
  };
  var answer = "The line is currently: " + order.join(", ");
  return answer;
};
