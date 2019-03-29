
function takeANumber(otherDeli, name) {
  otherDeli.push(`${name}`)
  otherDeli.length
  return(`Welcome, ${name}. You are number ${otherDeli.length} in line.`)
}

function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else
    return (`The line is currently:` + line)
}
