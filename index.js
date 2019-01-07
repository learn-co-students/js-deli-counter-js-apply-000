function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(customer) {
  if (customer.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = customer[0];
    customer.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
function currentLine(customer) {
    var line = []
    if (customer.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < customer.length; i++) {
        line += (i + 1) + ". " + customer[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
