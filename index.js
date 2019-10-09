//define number of customers in line at the start of the day
let katzDeliLine = [];

//add new customer to line, greet and tell them what number they are on the line
let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}


//serving current customer and removing them from the line when done
let nowServing = (katzDeliLine) => {
  let currentPerson = 0;
  for (currentPerson in katzDeliLine){
    currentPerson++;
  }
  
  let nextCustomer = katzDeliLine.shift();
  
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${nextCustomer}.`;
}



// print everyone in line with respective lineNum
let currentLine = (katzDeliLine) => {
  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  
  
  let line = []
  
  let index = 0;
  for (index in katzDeliLine){
    line.push(` `+[parseInt(index)+1]+`. ` + katzDeliLine[index])
  }
  
  return "The line is currently: " + line.join().trim();
}






