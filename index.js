function takeANumber(katzDeliLine, name){
  /*Array length start off at 0 so add 1 to accurately show the position*/
  var position = katzDeliLine.length + 1 
  
  /*Add each customer's name to the end of the array*/
  katzDeliLine.push(name)
  
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
var name = []

/*Check if line is empty.*/
  if(katzDeliLine.length > 0){ 
    
    /*Store the first person's name in variable before modifying the deli line array*/
    name = katzDeliLine[0]
    
    /*Modify array and remove first index/customer*/
     katzDeliLine.shift()
     
  return `Currently serving ${name}.`
  } else{
    
/*If line is null, no customers*/
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  var result = []
  
  if(katzDeliLine.length > 0){
    
    /*Use for loop to loop through each person in line and assign proper position and name*/
    for(let i = 0, p = katzDeliLine.length; p > i; i++) {
      
      /*add position and name to the end of array variable (this adds the commas as well)*/
      result.push(` ${i+1}. ${katzDeliLine[i]}`) 
      
    }
    return `The line is currently:${result}`
  } else{
    return "The line is currently empty."
  }
}