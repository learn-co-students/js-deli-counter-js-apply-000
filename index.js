function takeANumber(line, name){
  line.push(name)
  let curNum = line.indexOf(name) + 1
  let phrase = `Welcome, ${name}. You are number ${curNum} in line.`
  return phrase
}

function nowServing(line){
  if(line.length < 1){
    return "There is nobody waiting to be served!"
  }
  let serving = line.shift()
  return `Currently serving ${serving}.`
}


function currentLine(line){
  if(line.length < 1){
    return "The line is currently empty."
  }
  let sentence = "The line is currently: "
  let everyone = []
  for (let i = 0; i < line.length; i++){
    let curName = line[i]
    let listName = `${i+1}. ${curName}`
    everyone.push(listName)
  }
  return sentence + everyone.join(", ")
}
