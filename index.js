var katzDeliLine = [];

/*
1) deli takeANumber adds a person to the line:
2) deli takeANumber appends the person the end of the line if there are already people on it:
3) deli takeANumber properly handles multiple people being added:
*/

function takeANumber(line, newCustomer){
  line.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${line.length} in line.`
}

/*
4) deli nowServing returns the line is empty when no one is on line:
5) deli nowServing returns an announcement about the person it is serving, and shifts the line:
*/

function nowServing(line){
  if (line.length>0) {
    return `Currently serving ${line.shift()}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

/*
6) deli currentLine(line) returns "The line is currently empty." if no one is in line:
7) deli currentLine(line) says who is in line when there are people waiting:
*/

function currentLine (line){
  if (line.length===0) {
    return "The line is currently empty."
  }
  else {
    var list = []
    let i = 1
    while (i <= line.length){
      list.push(` ${i}. ${line[i-1]}`)
      i++
    }
    return `The line is currently:` + list
    }
  }
