
function takeANumber(katzDeliLine, name){
  var line = katzDeliLine.length + 1 
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${line} in line.`

}

takeAnumber()

function nowServing(katzDeliLine){
  var firstPerson = katzDeliLine[0]
  var line = katzDeliLine.length
  if (line !== 0){
    katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
  else if (line === 0) {
    return "There is nobody waiting to be served!"
  }
    
}

function currentLine (line){
  var emptyArray = [];
  var phrase = "The line is currently:"
  var str = line.toString()
  var long = line.length
   if (long !== 0){
    for (let i = 0; i < long; i++){
      emptyArray.unshift(` ${i + 1}. `+ line[i])
    }
    emptyArray.reverse()
    return phrase.concat(emptyArray)
    
  
   } else if (long === 0) {
   return "The line is currently empty."
   }
  
 }