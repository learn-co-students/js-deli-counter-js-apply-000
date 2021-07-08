const takeANumber = function(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
} 

const nowServing = function(deliLine) {
  if (deliLine.length > 0) {
    //removes and returns the first name in the array
    return `Currently serving ${deliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

const currentLine = function(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let results =["The line is currently:"];
    for (let i = 0; i < katzDeliLine.length; i++) {
      //push the number in line of the current person to the array
      results.push(`${i+1}.`);
      //check if it is the last person in line, and decide accordingly whether a comma is necessary after pushing the name to the array
      if (i + 1 !== katzDeliLine.length) {
        results.push(`${katzDeliLine[i]},`);
      } else {
        results.push(katzDeliLine[i]);
      }
    }
    //join the resulting array into a single string and return it
    return results.join(" ");
  } else {
    return "The line is currently empty.";
  }
}