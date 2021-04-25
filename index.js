var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  
  return (`Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  var firstPerson = katzDeli.shift();
  
  if(firstPerson === undefined) {
    return "There is nobody waiting to be served!";
  }
  return(`Currently serving ${firstPerson}.`);
}

function currentLine(katzDeliLine) {
  var order = [];
  
  if(katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  for(var i = 0; i < katzDeliLine.length; i++) {
    order.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  var lineOrder = "The line is currently: " + order.join(", ")
  
  return lineOrder
}