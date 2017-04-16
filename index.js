let katzDeli = [];

let takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);


  return `Welcome, ${name}, you are currently number ${(katzDeliLine.indexOf(name) + 1)} in line.`;
}

let nowServing = katzDeliLine => {
  if (katzDeliLine.length < 0) {
    return "There is nobody waiting to be served!";
  } else {
    return katzDeliLine.shift();
  }
}


let currentLine = katzDeliLine => {
  let sentence = "The line is currently: "
  if (katzDeliLine.length < 0) {
    return "The line is currently empty."
  } else {
    
    for (let i = 0; i < katzDeliLine.length; i++) {
      sentence += `${i + 1}. ${katzDeliLine[i]} `;
    }
  }

  return sentence;
  
}
