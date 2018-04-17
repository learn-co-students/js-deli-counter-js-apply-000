var KatzDeliLine = [];

function takeANumber(KatzDeliLine, name) {
  
    // Add name to deli line 
    KatzDeliLine.push(name);
    // Let customer know what position in the line they are
    return `Welcome, ${name}. You are number ${KatzDeliLine.length} in line.`
}

function nowServing(KatzDeliLine) {
  // Check if line is empty
  if (KatzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    // Store customer being served
    var BeingServed = KatzDeliLine[0];
    // Remove customer being served from deli line 
    KatzDeliLine.splice(0,1);
    // Let customer know they are currently being served
    return `Currently serving ${BeingServed}.`
  }
}

function currentLine(KatzDeliLine) {
  // Check if line is empty
  if (KatzDeliLine.length < 1) {
    return "The line is currently empty."
  }
  else {
    // Create new line array with names and corresponding position in line
    var LineOrder = [];
    for (var i = 0; i < KatzDeliLine.length; i++){
      LineOrder.push(`${i+1}. ${KatzDeliLine[i]}`)
    }
    // Returns the current order of deli line with position numbers preceding names
    return `The line is currently: ${LineOrder.join(", ")}`
  }
}

