function takeANumber(arr, name){
  arr.push(name)
  return `Welcome, ${name}. You are number ${arr.length} in line.`
  
}

function nowServing(arr){
  return (arr.length > 0) 
  ? `Currently serving ${arr.shift()}.`
  : "There is nobody waiting to be served!"
}

function currentLine(arr){
  return (arr.length > 0) 
  ? `The line is currently: ${ arr.map( (x,i) => `${i+1}. ${x}`).join(', ') }`
  : "The line is currently empty."
}