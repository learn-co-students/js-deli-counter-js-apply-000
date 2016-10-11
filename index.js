

function takeANumber(katzDeli, newName){
  katzDeli.push(newName);
  return "Welcome, " + newName + ". You are number " + (katzDeli.indexOf(newName) + 1) + " in line.";
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var nextUp = katzDeli[0];

    katzDeli.splice(0, 1);

    return "Currently serving " + nextUp + ".";
  }
}

function currentLine(katzDeli){
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  var resultArr = [];
  for (var i = 0; i < katzDeli.length; i++) {
    resultArr.push((i + 1) + ". " + katzDeli[i]);
  }

  return "The line is currently: " + resultArr.join(", ");
}
