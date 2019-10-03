// ==================== 1 =====================


function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

// =================== 2 ======================

 function nowServing (katzDeliLine) {
   
  if (katzDeliLine.length > 0) {
    var firstPerson = katzDeliLine.shift(0);
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

// =================== 3 ===================

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  var string = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    string.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently: " + string.join(", ");
}
