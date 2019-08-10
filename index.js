function takeANumber(katzDeliLine, name) {
  // push the name to our deli line array
  katzDeliLine.push(name)
  
  // push places the element at the end of the array, so we can use the length method to get their position, rather than their index
  let position = katzDeliLine.length
  
  // return string with their name and position
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(lineArr) {
  
  // if the line array is empty then there is no one in line waiting to be served
  if (lineArr.length === 0) {
    return `There is nobody waiting to be served!`
  }

  // if we reach this point in the funtion then the line is not empty
  // the first customer's name is located at index 0
  let customer = lineArr[0]
  
  // after storing that customer we can use the shift method to remove them from the line
  lineArr.shift()
  
  // return message to customer
  return `Currently serving ${customer}.`

}

function currentLine(lineArr) {
  // check if line is emtpy; if so, return
  if (lineArr.length === 0) {
    return `The line is currently empty.`
  }
  
  // initialize the line variable
  let line = `The line is currently: `

  // loop through each name in our line array
  for (let i = 0; i < lineArr.length; i++) {
    // add one to the index to get customer's position
    let position = i + 1
    // store their name as a variable
    let name = lineArr[i]
    
    // create a customer variable using the above data
    // if they aren't last in line then add a comma
    let customer = `${position}. ${lineArr[i]}`
    if (i < lineArr.length -1) {
      customer += ', '
    }
    // append customer to our line variable
    line += customer
  }

  // now we can return
  return line
}