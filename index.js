//1
function takeANumber(katzDeline, newName) {
    
    if (katzDeline.length > 0);
      katzDeline.push(newName);
      return (`Welcome, ${ newName}. You are number ${katzDeline.length} in line.`)
   }
  
  //2
  function nowServing(katzDeline) {
  var firstPerson = [];
  if (katzDeline.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    firstPerson.push(katzDeline[0]);
    katzDeline.shift();
    return (`Currently serving ${firstPerson[0]}.`)
  }
}


//3
  function currentLine(katzDeline) {
	var empty = [];
	if (katzDeline.length === 0) {
		return 'The line is currently empty.'
	} else {
		for (var i = 0; i < katzDeline.length; i++) {
			empty.push(` ${katzDeline.indexOf(katzDeline[i]) + 1}. ${katzDeline[i]}`)
		}
		return "The line is currently:" + empty
		}
}
