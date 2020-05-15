
function takeANumber(line, name){
    line.push(name);
    let num = line.length
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
  return "Currently serving " + line.shift() + "."
  }
}

function currentLine(line){
  let arr=[];
  if (line.length === 0){
    return "The line is currently empty."
  }
  else {
   
   for(let i =0; i <line.length; i++){
     let person= i+1 + ". " + line[i]
     arr.push(person)
   }
    let seq= arr.join(", ")
   return "The line is currently: " + seq
  }
}