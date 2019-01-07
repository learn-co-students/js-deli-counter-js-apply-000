
function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name)
  var message = (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  return message
}

function nowServing(katzDeliLine){

  if (katzDeliLine.length == 0){
    return (`There is nobody waiting to be served!`)
  } else if (katzDeliLine.length >= 1 ){
    var personServed = katzDeliLine.shift()

    return  `Currently serving ${personServed}.`
  }
}

function currentLine(line){
	if (line.length <= 0){
		return `The line is currently empty.`
	}

	const namesAndPos = []

	if (line.length >= 1){


	for (let i=0; i < line.length; i++){
		namesAndPos.push(` ${i + 1}. ${line[i]}`)

		}
return `The line is currently:${namesAndPos.join(',')}`
	}
}
