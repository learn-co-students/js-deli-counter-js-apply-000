

function takeANumber(katzDeliLine = [], custName){
  //return welcome message including person's name and place in line (index +1)
  katzDeliLine.push(custName);
  return `Welcome, ${custName}. You are number ${katzDeliLine.indexOf(custName) + 1} in line.`
}

function nowServing(katzDeliLine){
  //return the first person in line and remove individual in line
  if (katzDeliLine.length > 1){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
  //If no more people are in line, return "There is nobody waiting to be served"
}

function currentLine(katzDeliLine) {
  //Accepts current line and returns in string format: "The line is currently: Person1, Person 2, ect..."
  if (katzDeliLine.length !== 0){
    let currentLineStatement = "The line is currently:";
    for (let i =0; i<katzDeliLine.length; i++){
      currentLineStatement+= ` ${i+1}. ${katzDeliLine[i]},`
    } return currentLineStatement.slice(0, -1);
  } else {
    //If nobody is in line return "The line is currently empty."
      return "The line is currently empty."
  }
}