//Accepts existing line of people(array) and name of the new person(string) as parameters and returns a welcoming string with the new persons place in the line.
const takeANumber = (katzDeliLine, newPerson) => {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
};


//Looks for the first person in the line, if they exist, saves their name in a var and deletes them from the line then returns their name in a string. If the line is empty returns a string to notify that.
const nowServing = (katzDeliLine) => {
 
  if (katzDeliLine.length > 0) {
    let currentlyServed = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currentlyServed}.`;
  }
  return 'There is nobody waiting to be served!';
};


//Returns the current line as a string depending on line length
const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length > 0){
    let line = '';
    
    for (let i = 0; i<katzDeliLine.length; i++){
      let currentNumberInLine = i + 1;
      line = `${line} ${currentNumberInLine}. ${katzDeliLine[i]},`;
    }
   
    return `The line is currently:${line.slice(0,-1)}`;
  }
  
  return 'The line is currently empty.';
};
