var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);

  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var announcement = "The line is currently: ";
    var i;
    for (i = 0; i < katzDeli.length; i++){
      var customer = `${i + 1}. ${katzDeli[i]}`;
      if (i === katzDeli.length - 1) {
        announcement += customer;
      } else {
      announcement += customer + ", ";
      }
    }
    return announcement;
  }
}
