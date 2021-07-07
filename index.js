let deliLine = [];

function takeANumber(deliLine, string){
  deliLine.push(string);
  return `Welcome, ${string}. You are number ${String(deliLine.indexOf(string)+1)} in line.`;
}

function nowServing(deliLine){
  if(deliLine.length > 0){
    return `Currently serving ${deliLine.shift()}.`
  }
  else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine){
  if(deliLine.length > 0){
    let linePhrase = 'The line is currently: ';
    for (let i = 0; i <deliLine.length; i++){
      linePhrase = linePhrase + `${i+1}. ${deliLine[i]}, `
    }
    linePhrase = linePhrase.slice(0,-2);
    return linePhrase;
  }
  else{
    return "The line is currently empty.";
  }
}