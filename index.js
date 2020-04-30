function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  let linePlace = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${linePlace} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    let lineLeader = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${lineLeader}.`
  }
}

function currentLine(katzDeliLine){
  let announcement = 'The line is currently: '

  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }
  else{
    let lineLength = katzDeliLine.length;

    for(let i = 0; i < lineLength-1; i++){
      let currentCustomer = katzDeliLine[i];
      announcement += `${i+1}. ${currentCustomer}, `;
    }
    announcement += `${lineLength}. ${katzDeliLine[lineLength-1]}`;

    return announcement;
  }
}
