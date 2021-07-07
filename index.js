var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${num} in line.`;
}

function nowServing(katzDeli) {
  var numOne = katzDeli[0];
    if(katzDeli.length === 0) {
      return "There is nobody waiting to be served!";
    } else {
      katzDeli.shift(0);
      return `Currently serving ${numOne}.`;
    }
}


function currentLine(katzDeli) {
  var counter = 0;
  var tempArr = [];
  if(katzDeli.length === 0){
    return "The line is currently empty."
  } 
    while(katzDeli.length > counter) {
      tempArr.push(` ${counter + 1}. ${katzDeli[counter]}`);
      counter++;
      }
      return `The line is currently:${tempArr}`;
}
    