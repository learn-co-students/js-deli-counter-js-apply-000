const takeANumber = (line, customerName) => {
  // Add customer to array
  line.push(customerName);
  // Return the string with the customer name and the length of the array.
	return `Welcome, ${customerName}. You are number ${line.length} in line.`
}

const nowServing = (line) => {
  // Save the customer to a variable.
  const nowServing = line[0];
  // Remove the customer from the beginning of the array.
  line.shift()
  // Return the sentences.
  return (line.length > 0 ? `Currently serving ${nowServing}.` : 'There is nobody waiting to be served!')
}

const currentLine = (line) => {
  return (line.length > 0 ? `The line is currently: ${line.map((customer, i) => {
     return i + 1 === 1 ? `${i + 1}. ${customer}` : ` ${i + 1}. ${customer}`
  })}` : 'The line is currently empty.')
}
