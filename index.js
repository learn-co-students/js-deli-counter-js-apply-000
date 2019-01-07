var katzDeli = [];

function takeANumber(katzDeli, name){
  if (katzDeli.length === 0){
    katzDeli.push(name);
    return `Welcome, ${name}. You are number 1 in line.`
  } else{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
  }
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else{
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli){
  var newArray = []
  for (var i = 0; i < katzDeli.length; i++) {
    if (i === katzDeli.length-1) {
      newArray += `${i+1}. ${katzDeli[i]}`
    } else{
    newArray += `${i+1}. ${katzDeli[i]}, `
  }
  }
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  } else{
    return `The line is currently: `+newArray;
  }
}
