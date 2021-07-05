function takeANumber(array,name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}
function nowServing(array){
  if(array.length){
    return `Currently serving ${array.shift()}.`
  }
  return "There is nobody waiting to be served!"
}
function currentLine(array){
  let str=array.map((x,index)=>` ${index+1}. ${x}`).join(",")
  if(array.length){
    return `The line is currently:${str}`
  }
  return "The line is currently empty."
}