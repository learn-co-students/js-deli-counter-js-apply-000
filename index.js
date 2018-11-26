function takeANumber(queue, newPerson) {
  queue.push(newPerson);
  return`Welcome, ${newPerson}. You are number ${queue.length} in line.`;
}

function nowServing(queue) {
  if (queue.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${queue.shift()}.`; //.shift() removes 1st element and returns it - 2 birds w/1 stone
  }
}

function currentLine(queue) {
  var newQueue = [];
  
  if (queue.length === 0) {
      return 'The line is currently empty.';
    }  
  for (let i = 0; i < queue.length; i++) {
    newQueue.push(`${i + 1}. ${queue[i]}`);
  }
  return `The line is currently: ${newQueue.join(', ')}`;
}