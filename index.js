const takeANumber = (cQueue, name) => {
  cQueue.push(name);
  return `Welcome, ${name}. You are number ${cQueue.length} in line.`
}

const nowServing = (cQueue) => {
  if (cQueue.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${cQueue.shift()}.`;
}

const currentLine = (cQueue) => {
  if (cQueue.length === 0) {
    return "The line is currently empty.";
  }
  let finalString = "The line is currently:";
  for (let i = 0; i < cQueue.length; i++) {
    finalString += ` ${i+1}. ${cQueue[i]},`;
  }
  finalString = finalString.slice(0, -1);
  return finalString;
}
