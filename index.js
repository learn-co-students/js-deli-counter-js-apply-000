let katzLine = [];
function takeANumber(katzLine, customer) {
  katzLine.push(customer);
  return `Welcome, ${customer}. You are number ${katzLine.length} in line.`
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.slice(0,1).}`
  }
}