let katzDeliLine = [];

const takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

const nowServing = (katzDeliLine) => {
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

const currentLine = (arr) => {
  if (arr.length === 0) {
    return `The line is currently empty.`;
  } else {
    let text = ['The line is currently: ']
    
    for (let i=0;i<arr.length;i++) {
      if(i===arr.length - 1) {
      text.push((arr.indexOf(arr[i])+1) + '. ' + arr[i]);
      } else {
        text.push((arr.indexOf(arr[i])+1) + '. ' + arr[i] + ', ');
      }
    } return text.join('')
  }
} 