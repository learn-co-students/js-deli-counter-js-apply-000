function takeANumber(myDeliLine, name) {
  let inline = myDeliLine;  //current people in                              line
  let person = name;    // person who will be                              inline
  inline.push(person);
  
  let greeting =  `Welcome, ${person}. You are number ${inline.length} in line.`;
  
  return greeting;
}

// ////////////////////////////////////////


function currentLine(myDeliLine) {
  let inline = myDeliLine;
  
  let holder = 'The line is currently:';
  const emptyHolder = 'The line is currently empty.';
  let peopleOnLine = [];
  let counter = 1;
  
  for(let line of inline) {
    let onLine = ` ${counter}. ${line}`;
    peopleOnLine.push(onLine);
    counter++;
  }
  
  if(inline.length <= 0) {
    return emptyHolder;     //nothing in array
  } else {
    let newStatement = holder + peopleOnLine;
    return newStatement;                  
  }
  
}


// ////////////////////////////////

function nowServing(myDeliLine) {
  let inline = myDeliLine;
  
  const noOneHere = 'There is nobody waiting to be served!';
  let comeOnUp = `Currently serving ${inline[0]}.`;
  inline.shift();           //delete first person             //inline after they have been called
  
  if(inline.length <= 0) {
    return noOneHere;
  } else {
    return comeOnUp;
  }
  
  
}






