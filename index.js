function takeANumber(currentLine, newName){
currentLine.push(newName)
return (`Welcome, ${newName}. You are number ${currentLine.length} in line.`)
}

function nowServing(currentLine){
let firstPerson = currentLine.shift(currentLine)
if (currentLine.length === 0){
return `There is nobody waiting to be served!`
}
else{
	return `Currently serving ${firstPerson}.`
}
}


function currentLine(theLine){
let test = "The line is currently:"
let array = []
for (let i = 0; i<theLine.length; i++){
array.push(` ${[i + 1]}. ${theLine[i]}`)
}
if (theLine.length === 0){
	return "The line is currently empty."
}
else {
return test + array
}
}