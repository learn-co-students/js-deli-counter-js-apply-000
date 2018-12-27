const takeANumber = (currentLine2, name) => {
  currentLine2.push(name)
  return ('Welcome, ' + name + '.' + ' You are number ' + currentLine2.length + ' in line.')
}


const nowServing = (katzDeliLine) => {
let serving = katzDeliLine.shift()
if (serving) {
  return ('Currently serving ' + serving + '.')
} else {
  return 'There is nobody waiting to be served!'
}
}

const currentLine = (line) => {
	if (!line.length) { 
		return "The line is currently empty."
	}

	var sentence = 'The line is currently: ' // that
	var sen = ''
  for (let i = 0; i < line.length; i++) {
	let name = (line[i])
	let num = i + 1

	sen = (sen.concat(num, '. ',  name, ', '))
  }
  
sen = sen.slice(0, - 2)
sentence = (sentence.concat(sen))
return sentence
  }

