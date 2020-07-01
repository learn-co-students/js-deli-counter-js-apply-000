const katzDeli = []; // array, declaring the current line, the queue in order of given name

function takeANumber(katzDeli, name) { //katzDeli is the queue#, name is the name to be added to queue
   katzDeli.push(name);  //.push adds the name given in the function to katzDeli array (the queue)
   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`; //the queue number is kept track by katzDeli.length
}

function nowServing(katzDeli) {   //name in katzDeli array is next in line
  if (katzDeli.length > 0) {      //if the queue in katzDeli is more the 0 people (more than 1) do this
    const nowServing = katzDeli[0]; //nowServing found in index-test.js, variable for interpolation string--directs to first in queue in katzDeli
    katzDeli.shift();             //removes first person from array, changes the queue
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(line) { //line input which is an array found in index-test.js
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    const queue = [];  //loop through the names and find out what the index of each is, modify in string. Bill, Jane, Ann
    for (let i = 0; i < line.length; i++) {     // i starts at Bill  = queue[0], kine length of line array given in function
      queue.push(` ${i+1}. ${line[i]}`)         // i takes the index status + 1, to modify the correct queue so youre not ref array index
    }                                           // line[i], i is for next in line, Bill[0] Jane[1] Ann[2]
    return `The line is currently:${queue}`;    // becareful of spacing in string
  }
}


/*
 return `The line is currently: ${line.findIndex} ${line}`;

 function currentLine(line) { //line found in index-test.js
   if (line.length === 0) {
     return `The line is currently empty.`;
   } else {
     var queue = [];
     for (let i = 0; i < line.length; i++) {
       queue.push(`${i+1}. ${line[i]} `)
     }
     return `The line is currently: ${queue}`;
   }
 }

*/
