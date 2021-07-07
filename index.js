function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

//2 
function nowServing(katzDeliLine){
  if(katzDeliLine > []){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

//3 
function currentLine(katzDeliLine){
  var string = `The line is currently: `
  if(katzDeliLine.length < 1){
    return "The line is currently empty.";
  }
  for(var i = 0; i < katzDeliLine.length; i++){
    string+= `${i + 1}. ${katzDeliLine[i]}, `
  }
  return string.slice(0, -2)
}