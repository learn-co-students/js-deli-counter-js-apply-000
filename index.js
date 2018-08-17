
function takeANumber(katzDeliLine, person_name) {
  katzDeliLine.push(person_name);
  return(`Welcome, ${person_name}. You are number ${katzDeliLine.length} in line.`); //Length gives you the last index plus one
} //when we wrap strings in back ticks we can use placeholders and insert variables or evaluated javascript

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}


function currentLine(katzDeliLine) {
  let array = [];
  let i = 0;
  while (i < katzDeliLine.length) {
    array.push(' '+[i+1]+'. '  + katzDeliLine[i]) // Takes the empty array and appends the index+1 and the index element
    i++; //adds one to the preceding value.
  }
  if (katzDeliLine.length === 0) {  //if theres nothing store in the array
    return "The line is currently empty.";
  } else
  return('The line is currently:' + array); // return a string plus the loop created.
}
