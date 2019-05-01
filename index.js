const takeANumber = function (curPeople, name) {
  //curLine is the array of ppl in the line now
  let yourNumber = (curPeople.length + 1);
  curPeople.push(name);
  return (`Welcome, ${name}. You are number ${yourNumber} in line.`)
}

const nowServing =  function (curPeople) {
  if (curPeople.length === 0){
    return (`There is nobody waiting to be served!`)
  } else {
    return (`Currently serving ${curPeople.shift()}.`)
    // this (curPeople.shift()) is the first element that is being deleted.
  }
}

const currentLine = function (curPeople) {
  if (curPeople.length === 0){
    return (`The line is currently empty.`)
  }
  
  let sentence = "The line is currently: "
  
  for (let i=0; i<curPeople.length; i++) {
    let curPerson = curPeople[i];
    let number = (i+1);
    if (i === curPeople.length-1) {
      sentence = sentence + number + ". " + curPerson;
    } else {
      sentence = sentence + number + ". " + curPerson + ", ";
    }
  }
  return sentence;
}


