const takeANumber = (katzDeliLine, newName) => {
  katzDeliLine.push(newName); 
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

const nowServing  = (katzDeliLine) => {
  if (katzDeliLine.length >= 1) {
    const next = katzDeliLine.shift(); 
    return `Currently serving ${next}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

const currentLine = (katzDeliLine) => {
  if (katzDeliLine.length >= 1) {
  const formatted = (name, i) => i+1 + ". " + name; 
  return `The line is currently: ${katzDeliLine.map(formatted).join(", ")}`
  } else {
    return 'The line is currently empty.'
  }
}