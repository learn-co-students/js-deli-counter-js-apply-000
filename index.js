// function takeANumber(line, name) {
   
//    return `Welcome, ${name}. You are number ${line[i]} in line.`
// }


function takeANumber(line, name) {
   line.push(name)

   return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
   if (katzDeliLine.length === 0){
      return "There is nobody waiting to be served!"
   } else {
      return `Currently serving ${katzDeliLine.shift()}.`
   }
}

function currentLine(line) {
   if (line.length === 0) {
      return "The line is currently empty."
   } 
   
   let num_and_names = []

   for (let i = 0; i < line.length; i++) {
      num_and_names.push(`${i+1}. ${line[i]}`)
   }

      return `The line is currently: ${num_and_names.join(", ")}`
   
}








