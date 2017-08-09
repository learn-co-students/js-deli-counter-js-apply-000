var katzDeli = [];

function takeANumber(katzDeliLine, customer) {
    katzDeliLine.push(`${customer}`);
    return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
      if (katzDeliLine.length < 1) {
        return "There is nobody waiting to be served!";
      }
      else {
        var customer = katzDeliLine.shift();
        return `Currently serving ${customer}.`;
      }
  }

  function currentLine(arr) {
  	var newArr = [];
    for (let i=0; i<arr.length; i++) {
      newArr.push(" " + (i + 1) + ". " + arr[i]);
  	}
    if (arr.length<1) {
      return "The line is currently empty.";
    }
    else {
      return ("The line is currently:" + newArr);
    }
  }
