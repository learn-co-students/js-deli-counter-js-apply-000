function takeANumber(queue, newPerson) {
  queue.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${queue.length} in line.`;
}

function nowServing(queue) {
  if (queue.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${queue.shift()}.`; //.shift() removes 1st element and returns it - 2 birds w/1 stone
  }
}

function currentLine(queue) {
  if (queue.length === 0) {
    return 'The line is currently empty.';
  } else {  
      let newQueue = [];
      for (let i = 0; i < queue.length; i++) {
        newQueue.push(`${i + 1}. ${queue[i]}`);
      }
      return `The line is currently: ${newQueue.join(', ')}`;
  }
}

//Below function is an alternate version of currentLine()
function currentLine_string(queue) {
  if (queue.length === 0) {
      return 'The line is currently empty.';
    }  
  var newQueue = 'The line is currently: ';
  for (let i = 0; i < queue.length; i++) {
    if (queue.length - 1 === i) {
      newQueue += `${i + 1}. ${queue[i]}`
    } else {
      newQueue += `${i + 1}. ${queue[i]}, `
    }
  }
  return newQueue;
}