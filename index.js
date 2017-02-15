var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
  katzDeli = katzDeliLine;
  katzDeli.push(personName);

  return `Welcome, ${personName}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli) {
  var announcement = "The line is currently:";

  if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length - 1; i++) {
      announcement = `${announcement} ${i+1}. ${katzDeli[i]},`;
    }
    announcement = `${announcement} ${i+1}. ${katzDeli[i]}`;
  }
  else {
    announcement = "The line is currently empty.";
  }

  console.log(announcement);
  return announcement;
}
