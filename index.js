function takeANumber(current, name) {
  current.push(name);
  return `Welcome, ${name}. You are number ${current.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var next = katzDeliLine.shift();
    return `Currently serving ${next}.`
  }
}
function currentLine(current) {
  if(current.length === 0) {
    return 'The line is currently empty.'
  } else {
    var string = 'The line is currently: '
    for(let i = 0; i < current.length; i++) {
      if(i === current.length - 1) {
        string += `${i+1}. ${current[i]}`
      } else {
      string += `${i+1}. ${current[i]}, `
      }
    }
  } return string;
}