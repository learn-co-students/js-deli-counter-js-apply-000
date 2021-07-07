function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  	let firstCustomer = line[0];
  	line.shift();
    return `Currently serving ${firstCustomer}.`;
  }
}

// function currentLine(line) {
// 	if(line.length === 0) {
// 		return "The line is currently empty.";
// 	}
// 	let string = "The line is currently: "
// 	let i = 0;
// 	for (i = 0; i < line.length; i++) {
// 		string += `${i + 1}. `;
// 		string += `${line[i]}, `
// 	}
// 	return string;
// }

// currentLine(katzDeliLine);

function currentLine(line) {
	if(line.length === 0) {
		return "The line is currently empty.";
	}
	let string = "The line is currently:"
	let numberedLine = line.map(function(name, index) {
		return `${index + 1}. ${name}`;
	}).join(", ");
	return `${string} ${numberedLine}`;
}

takeANumber(katzDeliLine, "Ada");
nowServing(katzDeliLine);
currentLine(katzDeliLine);