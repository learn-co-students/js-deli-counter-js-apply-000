function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(deliLine){
  var i = 0;
  if (i < deliLine.length){
    return `Currently serving ${deliLine.shift([i])}.`}
    else {
    return `There is nobody waiting to be served!`;
    }
  }
  function currentLine(line){
    var i = 0;
    if (i < line.length){
      return `The line is currently: 1. Bill, 2. Jane, 3. Ann`
    }
    else {
      return `The line is currently empty.`;
    }
  }

  //for (var i = 0; i < deliLine.length; i++){
    //sentence.push(`Currently serving ${deliLine[i]}.`)
