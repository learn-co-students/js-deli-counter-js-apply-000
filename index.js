var katzDeli = [];
var katzDeliLine = [];

var takeANumber = function(katzDeliLine, personName){
  katzDeliLine.push(personName);
  var pos = katzDeliLine.indexOf(personName) + 1 ;
  return 'Welcome, ' + personName + '. ' + 'You are number ' + pos + ' in line.';

}


var nowServing = function(deliLine){
  if (deliLine <= 0){
    return "There is nobody waiting to be served!";
  } else {
    var aaa = 'Currently serving ' + deliLine[0] + '.';
    deliLine.shift();
    return aaa;

  }
}



var currentLine = function(line){
  var rit = "The line is currently: ";
  var arr = [];
  if (line.length > 0){
    for(var i=0; i<line.length; i++){
      arr.push((line.indexOf(line[i])+1) + '. ' + line[i]);
    }
    var cac = arr.join(', ');

    return rit + cac;
  }
  else {
    return "The line is currently empty.";
  }

}
