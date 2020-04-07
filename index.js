function takeANumber(line, newCustomer) {
  const placeInLine = line.length + 1;
  line.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${placeInLine} in line.`;
} 

function nowServing(line) {
  var announcement
  line.length === 0 ?
    announcement = 'There is nobody waiting to be served!':
    announcement = `Currently serving ${line.shift()}.`;
  return announcement;
}

function currentLine(line) {
  // this is how i would normally do it but i assume you would like to see me use loops instead
  // of methods like .forEach and .map so i did both
  
  if(line.length === 0) return 'The line is currently empty.';
  const sentencePrefix = 'The line is currently: ';
  const namesAndPlacesInLine = line.map((customer, i) => { return`${i+1}. ${customer}` });
  return sentencePrefix + namesAndPlacesInLine.join(", ");
  
  // if(line.length === 0) return 'The line is currently empty.';
  // var sentence = 'The line is currently:';
  // for(var i = 0; i < line.length; i++) {
  //   if(i <  line.length - 1) {
  //     sentence += ` ${i+1}. ${line[i]},`
  //   } else {
  //     sentence += ` ${i+1}. ${line[i]}`
  //   }
  // }
  // return sentence;
}