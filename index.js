var katzDeli = [];

function takeANumber(katzDeliLine, newCustomer) {
  let i = 0
  katzDeliLine.push(newCustomer)
  if (katzDeliLine.length === 1) {
    return "Welcome, " + newCustomer + ". You are number " + [i+1] + " in line."
  }
  else if (katzDeliLine.length > 0) {
        return "Welcome, " + newCustomer + ". You are number " + (newCustomer.length-1) + " in line."
  }
}

function nowServing(katzDeliLine) {
  var currentCustomer = katzDeliLine.shift()
  if(katzDeliLine.length > 0){
     return 'Currently serving ' + currentCustomer +'.' ;
}    else if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var people = []
    for (var i = 0; i < katzDeliLine.length; i++) {
       people.push((i+1) +  ". " + katzDeliLine[i]) ;
    } 
  return  "The line is currently: " + people.join(", ")
  }
}