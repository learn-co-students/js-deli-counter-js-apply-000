const takeANumber = (katzDeliLine, newCustomerName) => {
  katzDeliLine.push(newCustomerName);
  return `Welcome, ${newCustomerName}. You are number ${katzDeliLine.length} in line.`;
}
  
  
  const nowServing = (katzDeliLine) => {
    if (katzDeliLine > ['']) {
      return `Currently serving ${katzDeliLine.shift()}.`
    } else {
        return "There is nobody waiting to be served!"
    }
  }
  
  const currentLine = (katzDeliLine) => {
    let customersOnLineArray = [];
    
    if (katzDeliLine > ['']) {
      for (let i = 0; i < katzDeliLine.length; ++i) {
        customersOnLineArray.push(` ${i+1}. ${katzDeliLine[i]}`);
      }
      return "The line is currently:" + customersOnLineArray;
    } else {
      return "The line is currently empty.";


    }
  }
  