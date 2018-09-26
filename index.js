//takes two parameters and appends one while giving message
function takeANumber(otherDeli, katzDeli){
  otherDeli.push(katzDeli)
  return `Welcome, ${katzDeli}. You are number ${otherDeli.length} in line.`
}
//gives the name of the first person and removes them
function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else{
    return `Currently serving ${deliLine.shift()}.`
  }
}
//gives the names and numbers of each person in line
function currentLine(line){
  //if line is empty message
  if (line.length === 0){
    return "The line is currently empty."
  } else {
    //creates and concatenates string with line
    var i = 0
    var string = "The line is currently: "
    while (i < line.length -1){
      string = string + `${i+1}. ${line[i]}, `
      i++
    }
    //final concatenation
    string = string + `${i+1}. ${line[i]}`
    return string
  }
}