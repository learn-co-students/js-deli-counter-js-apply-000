function takeANumber(current, name){
  current.push(name);
  
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(line){
  if(line.length < 1){
    return 'There is nobody waiting to be served!'
  } else {
    let temp  = line[0];
    line.shift();
    return `Currently serving ${temp}.`
  }
}

function currentLine(line){
  let results = ['The line is currently: '];
  if(line.length <1){
    return 'The line is currently empty.';
  } else {  

    for(let i =0; i < line.length; i++){
      results.push(i+1 + '. ', line[i]);
      if(i !== line.length-1){
        results.push(', ')
      }
    }
  }
  return results.join('');
}