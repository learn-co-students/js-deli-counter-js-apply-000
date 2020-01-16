function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return `Welcome, ${customer}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0){
    var currentlyServing = katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${currentlyServing}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
  return katzDeli[i];
}

function currentLine(katzDeli){
  if (katzDeli.length === 0) {
      return "The line is currently empty.";
  } else {
    var line = "";
    line += "The line is currently: ";
    for (var i = 0; i < katzDeli.length; i++){
      if (i !== 0) {
        line += ", ";
      }
      line += `${i + 1}. ${katzDeli[i]}`;
    }
    return line;
  }
}

// 