var katzDeliLine = [];

function takeANumber (currentLineOfPeople, name) {
  currentLineOfPeople.push(name);
  let position = currentLineOfPeople.length;
  return 'Welcome, '+ name +'. You are number ' + position + ' in line.'
}

function nowServing(line) {
  if(line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else{
    return 'Currently serving ' + line.shift() + '.';
  }
  
}

function currentLine (line) {
  if(line.length === 0){
    return 'The line is currently empty.';
  }
  else{
    var str = 'The line is currently: ';
    for(let i = 0; i < line.length; i++ ){
      str += (i + 1) + '. ' + line[i];
      if( i !== line.length - 1){
        str += ', ';
      }
    }
    return str;
  }
}

