var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length > 0) {
		var nextName = katzDeliLine.shift()
		return(`Currently serving ${nextName}.`)
	} else {
		return("There is nobody waiting to be served!")
	}
} 

function currentLine(katzDeliLine) {
  var theLine = "The line is currently: "
  if(katzDeliLine.length === 0) {
    return("The line is currently empty.")
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      theLine += `${i+1}. ${katzDeliLine[i]}`
      if (i < katzDeliLine.length - 1) {
        theLine += `, `
      }
    }
    return theLine
  }
}