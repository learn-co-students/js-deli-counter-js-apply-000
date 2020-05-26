const takeANumber = (queue, name) => {
  queue.push(name);
  return `Welcome, ${name}. You are number ${queue.length} in line.`;
}

const nowServing = (queue) => {
  if(queue.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  let name = queue[0];
  queue.shift();
  return `Currently serving ${name}.`;
}

const currentLine = queue => {
  if(queue.length === 0) {
    return 'The line is currently empty.';
  }
  let result='The line is currently: ';
  for(let i = 0; i < queue.length; i++) {
    let tempStr = (i === 0) ? `1. ${queue[i]}`: `, ${i+1}. ${queue[i]}`;
    result = result.concat(tempStr);
  }
  return result;
}