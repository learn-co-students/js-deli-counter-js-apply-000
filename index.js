var katzDeliLine = [];

function takeANumber( katzDeliLine, newName){

  // add newName to takeANumber array
  // return index of newName and + 1
  
  var x = katzDeliLine.push( newName );
  
  return 'Welcome, ' +  newName +'. You are number '+ x +' in line.' 

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  var serving = katzDeliLine.shift();
  return 'Currently serving ' + serving +'.';
  
}
function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  
  var newArray = [];
  
  for( let i = 0; i < katzDeliLine.length; i++){
  newArray.push(" " + (i + 1) + ". " + katzDeliLine[i] )
  }
  var x = newArray.toString();
  return "The line is currently:"+ x;
  
}