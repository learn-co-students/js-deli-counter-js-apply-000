var katzDeli = []       //create the deli

var katzDeliLine = []   //create the deli line (whats the difference?)

//PART ONE
function takeANumber(queue, name){
  queue.push(name)                                                              //add the new customer to the end of the line
  var place = queue.length                                                      //get their place in line
  return `Welcome, ${name}. You are number ${place} in line.`                   //welcome that person
}

//PART TWO
function nowServing(queue){
  if(queue.length >= 1){                                                        //if the line's not empty
    var customer = queue[0]                                                     //get the first customer (at index 0)
    queue.shift()                                                               //remove that person from the line
    return `Currently serving ${customer}.`                                     //and print the statement
  } else {                                                                      //otherwise
    return "There is nobody waiting to be served!"                              //print the other statement
  }
}


//PART THREE
function currentLine(queue){
  if(queue.length === 0){                                                       //if the line is empty
    return "The line is currently empty."                                       //print the empty statement
  } else {                                                                      //otherwise...
    var tally = []                                                              //create an second array to track the people
    for(let i = 0; i < queue.length; i++){                                      //for every index in the queue
      tally[i] = `${i+1}. ${queue[i]}`                                          //add to the tally in this format: "index. name"
    }
    return `The line is currently: ${tally.join(', ')}`                         //once completed return the statement, joining the elements of tally with a comma and space.
  }
}
