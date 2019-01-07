function takeANumber(katzDeli, name) {
    
    if (katzDeli.length > 0);
      katzDeli.push(name);
      return ('Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.')
  }
   takeANumber(katzDeli, 'Ada');
   
   
function nowServing (katzDeliLine){
    if(katzDeliLine.length===0) { 
    return 'There is nobody waiting to be served!'; 
}
    var person = katzDeliLine.shift(); 
    return "Currently serving " + person + ".";
}


function currentLine (katzDeliLine) {
  if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
  var name = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    name.push(i + 1 + ". " + katzDeliLine[i])
}
  return "The line is currently: " + customerAndNumber.join(", ");
}
