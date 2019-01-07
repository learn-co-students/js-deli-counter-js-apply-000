function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if(deliLine === undefined || deliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(deliLine) {
  var current = "The line is currently:";

  if(deliLine === undefined || deliLine.length < 1) {
    return "The line is currently empty."
  } else {
    deliLine.forEach(function(x,i) {if(i < x.length-1) { current = current + ` ${i+1}. ${x},`} else { current = current + ` ${i+1}. ${x}`}});
  }
  return current;
}
