function takeANumber(line, newPerson){
  line.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${line.length} in line.`
}

function nowServing(arr){
  if (arr.length > 0) {
    return `Currently serving ${arr.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr){
  let humanArr = [];
  if(arr.length > 0){
	arr.forEach(
		function (person, index){
			humanArr.push(`${index + 1}. ${person}`);
		}
	)
	var stringedArr = humanArr.join(", ")
	return `The line is currently: ${stringedArr}`
  } else {
	  return "The line is currently empty."
  }
}
