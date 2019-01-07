var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  //push the newName into the input array (will be end of array)
  return `Welcome, ${newName}. You are number ${katzDeliLine.push(newName)} in line.`;
};

function nowServing(katzDeliLine) {
  //check if line is empty
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
    //else return the name of the person being served katzDeliLine[0];
  } else {
    //create name variable
    var currentName = katzDeliLine[0];
    //remove first element from katzdeliline
    katzDeliLine.splice(0, 1);
    return `Currently serving ${currentName}.`;
  }
}

function currentLine(katzDeliLine) {
  //check if line is empty
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  //else iterate through the line
  } else {
    //create outputArray variable
    var outputArray = [];
    for(var i = 0; i < katzDeliLine.length; i++) {
      //create name variable
      var name = katzDeliLine[i];
      //push each name and place in line into output array
      outputArray.push((i + 1) + '.' + ' ' + name);
    }
  }
  //convert output array to string
  outputArray = outputArray.join(', ');
  //return correct verbage
  return 'The line is currently: ' + outputArray;
}
console.log(currentLine(katzDeli));
