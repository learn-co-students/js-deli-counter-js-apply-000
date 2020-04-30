// 1. The function, `takeANumber`, should accept two paramaters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. 

function takeANumber(lineUp, name){
  lineUp.push(name);
  return `Welcome, ${name}. You are number ${lineUp.length} in line.`;
}


// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}


// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(line){
  if(line.length===0){
    return "The line is currently empty."
  } else {
    var list = "The line is currently: "
    for(let i = 0; i < line.length; i++){
        list = list.concat(`${i+1}. ${line[i]}`);
        if(i !== line.length-1){
          list = list.concat(", ");
        }
    }
    return list;
  }
}