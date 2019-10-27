
function takeANumber(curLine, name) {
  curLine.push(name);
  let number = curLine.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(kdl){
  if (kdl.length !== 0) {
    let first = kdl[0];
    kdl.shift();
    return `Currently serving ${first}.`;
  } else {return "There is nobody waiting to be served!"}
}

function currentLine(kdl){
  let newList = []
  if (kdl.length !== 0) {
    for (let i=0; i < kdl.length; i++) {
      let count = i + 1;
      newList.push(" "+count + ". " + kdl[i]) // In string literal this does not work...   
      count ++                                // -why does it not add a space when concat?
    }
    return "The line is currently:" + newList
  } if (kdl.length === 0) { //if (!kdl)
    return "The line is currently empty."
  }
  
} 