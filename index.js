var katzDeliLine = [];

var takeANumber = function(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`
};

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length <= 0){
  return `There is nobody waiting to be served!`
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
};

var currentLine = function(katzDeliLine){
  if(katzDeliLine <= 0){
    return "The line is currently empty."
  }
  else{
    var holdArray = []
    
    for(var i = 0; i<katzDeliLine.length; i++){
      holdArray.push(`${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${holdArray.join(", ")}`
  }
};