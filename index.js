const LondonDeliLine = [];

function takeANumber(LondonDeliLine,name) {
  LondonDeliLine.push(name)
  return `Welcome, ${name}. You are number ${LondonDeliLine.length} in line.`
};

function nowServing(LondonDeliLine) {
  if (LondonDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${LondonDeliLine.shift()}.`
  }
};

function currentLine(LondonDeliLine) {
  if (LondonDeliLine.length === 0) {
    return "The line is currently empty."
  };

  const currentQueue = [];

  for (let queueIndex = 0; LondonDeliLine.length; queueIndex++) {
    currentQueue.push(`${queueIndex +1} ${LondonDeliLine[queueIndex]}`)
    }

    return `The line is currently ${currentQueue.join(',')}`

}
