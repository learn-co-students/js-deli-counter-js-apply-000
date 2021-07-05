var katzDeli = []

function takeANumber(KatzDeliline, name) {
  KatzDeliline.push(name)

  return `Welcome, ${name}. You are number ${KatzDeliline.length} in line.`
};

function nowServing(KatzDeliline) {
  if (!KatzDeliline.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${KatzDeliline.shift()}.`
};

function currentLine(KatzDeliline) {
  if (!KatzDeliline.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = KatzDeliline.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${KatzDeliline[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};
