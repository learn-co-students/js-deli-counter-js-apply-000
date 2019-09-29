function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    	let firstInLine = katzDeliLine.shift();
    	return `Currently serving ${firstInLine}.`;
  	}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
      let result = [];
      
      for (let i = 0; i < katzDeliLine.length; i++) {
        result += (i + 1) + '. ' + katzDeliLine[i] + ', ';
      }
      result = result.slice(0, result.length-2);
      return 'The line is currently: ' + result;
    }
}

//Alternative nowServing function:

// function nowServing(katzDeliLine) {
//   let firstInLine = katzDeliLine.shift();
  
//   if (katzDeliLine.length !== 0) {
//     return `Currently serving ${firstInLine}.`;
//   } else {
//       return `There is nobody waiting to be served!`;
//     }
// }

