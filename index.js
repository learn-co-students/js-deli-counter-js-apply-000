function takeANumber(currentline, new_customer) {
  currentline.push(new_customer)
  var number = currentline.indexOf(new_customer) + 1;
  return "Welcome, "+ new_customer + ". You are number " +number +" in line." ;  
}

function nowServing(currentline) {
  var cust = currentline[0]
  if (currentline.length > 0){
    currentline.splice(0,1)
    return "Currently serving "+cust + ".";
  } else { 
    return "There is nobody waiting to be served!";
  }
  
}

function currentLine(currentline) {
  var len = currentline.length
  var list = []
  var spacelist = []
  
  if (currentline.length > 0){
    for (var i = 0; i < len; i++) { 
      list.push(i+1 + ". " + currentline[i])
    }
    var spacelist = list.join(', ')
    return "The line is currently: "+spacelist;
  } else {
    return "The line is currently empty."
  }
    
}
