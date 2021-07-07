var katzDeliLine = [];
function takeANumber (katzDeliLine, newCustomer) {
  katzDeliLine.push(`${newCustomer}`);
  return (`Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`);
  }
  
  
  function nowServing (katzDeliLine) {
    var i = 0;
    while (i < katzDeliLine.length) {
      i++;
    }
    if (katzDeliLine.length === 0) {
      return ("There is nobody waiting to be served!")
    }else{
      return (`Currently serving ${katzDeliLine.shift()}.`);
    }
  }
  
  var nameOnLine = [];
  function currentLine (katzDeliLine) {
    if (katzDeliLine.length === 0){
      return ("The line is currently empty.")
    }else{
      var i = 0;
      while (katzDeliLine.length >  i){
      nameOnLine.push(` `+[i+1]+`. `  + katzDeliLine[i]);
    i++;
        }
        return (`The line is currently:` + nameOnLine);
    }
  }