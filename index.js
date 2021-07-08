
function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
//I need to make the katzDeli to call itself until the array is empty and thus getting the no one there.
if(katzDeliLine.length){
  return `Currently serving ${katzDeliLine.shift()}.`

}
 else{
  return 'There is nobody waiting to be served!'
}
}

function currentLine(katzDeliLine){
  if (0<katzDeliLine.length){
    //need to loop this with is correct possition.
    var serving = []
    for (let i = 0; i < katzDeliLine.length; i++){
      serving.push(` ${i+1}. ${katzDeliLine[i]}`)
      }
    return `The line is currently:${serving}`
  }
  else{
    return "The line is currently empty."
  }
}
