var katzDelineLine =[];
function takeANumber(katzDelineLine, name) {
  katzDelineLine.push(name);
  for (var i = 0; i < katzDelineLine.length; i++) {
    if (name === katzDelineLine[i]) {
      return `Welcome, ${name}. You are number ${1 + i} in line.`;
    }
  }
}

function nowServing(katzDelineLine) {
  if (katzDelineLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDelineLine.shift()}.`;
  }
}

function currentLine(katzDelineLine) {
  var string = "The line is currently: "
  if (katzDelineLine.length === 0) {
    return "The line is currently empty.";
  } 
  else {
  for (var i = 0; i < katzDelineLine.length; i++) {
  string += `${1 + i}. ${katzDelineLine[i]}, `
  }
  }
  return string.slice(0, string.length - 2)
}
  
  
  
  