function currentLine(line) {
  if(line.length == 0) {
        return 'The line is currently empty.'
  }

const deliCustomer = []

for (let i=0, len = line.length; i < len; i++) {
  deliCustomer.push(`${i+1}. ${line[i]}`) //+1 so doesn't start at 0

}
return `The line is currently: ${deliCustomer.join(', ')}`
};

function nowServing(line) {
  if(line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function takeANumber(line,name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};
