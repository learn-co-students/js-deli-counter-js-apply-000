//This function establishes the 'katzDeli' array, and the name of each array element
//     as the parameters.
//When the counter variable is less than 1, the loop incremently adds a new element
//     to the end of the katzDeli array, and assigns that new element a number
//     to illustrate the customer's place in line.
//Once the loop is run, the function will return the string:
//    `Welcome (last array element), you are (assigned number) in line.`
function takeANumber(katzDeli, name){
  let i = 0;
    while (i < 1){
      katzDeli.push(`${name}`);
      i++;
  }
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}
//This function establishes the 'deliLine' array as the parameter.
//When the array length equals 0, the function returns the string:
//    `There is nobody waiting to be served!`
//When the counter variable 'i' is less than 1, the loop will incremently add a new
//     element to the deliLine array, and assign the first element to the string:
//    `Currently serving (first element).`
//Once the loop is run, the function will remove the first element from the array,
//     and return the new array.
function nowServing (deliLine){
    if (deliLine.length === 0){
      return (`There is nobody waiting to be served!`)
  }else {
     let i = 0;
       while (i < 1){
        deliLine[i] = (`Currently serving ${deliLine[0]}.`);
        i++;
      }
  return deliLine.shift(`${deliLine[0]}`)
   }
}
//This function establishes the 'katzDeliLine' array as the parameter.
//When the length of katzDeliLine is 0, the program will return
//    the string `This line is currently empty.`
//When the counter variable, i, is greater than 0, but less than the array.length,
//    the loop will assign a number to the customer's name, to illustrate
//    the customer's place in line.
//Note: the customer's assigned number = the customer's index number in the array + 1.
//Once the loop is run, the function will return the new katzDeliArray within the string:
//   `The line is currently: (assigned number) (customer's name)`
//    listing each customer in numerical order.
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return (`The line is currently empty.`)
  }else {
      let i = 0;
        while (i < katzDeliLine.length){
          katzDeliLine[i] = (` ${[i + 1]}. `+katzDeliLine[i]);
          i++;
       }
     return (`The line is currently:${katzDeliLine}`)
   }
}
