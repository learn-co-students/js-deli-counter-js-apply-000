
function takeANumber(katzdeliLine, name){
  katzdeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzdeliLine.length} in line.`
}

function nowServing(katzdeliLine){
  if (katzdeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzdeliLine.shift()}.`
  }
}

function currentLine(katzdeliLine){
  if (katzdeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var katzDeli = []
    for (let i = 0; i < katzdeliLine.length; i++){
      katzDeli.push(`${i + 1}. ${katzdeliLine[i]}`)
    }return `The line is currently: ${katzDeli.join(", ")}`
  }
}
