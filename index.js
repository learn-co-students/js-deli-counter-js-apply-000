var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${i} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return (`Currently serving ${katzDeliLine.shift()}.`)

}
  else  return "There is nobody waiting to be served!"

}

function currentLine(katzDeliLine){
  var l = "The line is currently:"
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else for (var i = 0; katzDeliLine.length > i; i++){
    if (i != katzDeliLine.length - 1){ l += ` ${i+1}. ${katzDeliLine[i]},` }
    else { l += ` ${i+1}. ${katzDeliLine[i]}` }
  }
  return l



}
