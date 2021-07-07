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

  const currentQueue = []

  for (let i = 0; i < LondonDeliLine.length; i++) {
    currentQueue.push(`${i + 1}. ${LondonDeliLine[i]}`)
  }

  return `The line is currently: ${currentQueue.join(', ')}`
};


