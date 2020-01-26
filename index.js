const takeANumber = (line,name) => {
  line.push(name);
  return 'Welcome, ' + name + '. You are number ' + (line.indexOf(name) + 1) + ' in line.';
};

const nowServing = line => {
  if ( line.length === 0 ) { return 'There is nobody waiting to be served!'; }
  else {
    const name = line[0];
    line.shift();
    return 'Currently serving ' + name + '.';
  }
};

const currentLine = line => {
  if (line.length === 0 ) { return 'The line is currently empty.'; }
  else {
    let output = 'The line is currently: ';
    for ( let i = 0; i < line.length; i++ ) {
      if ( line[i+1] ) { output += `${i+1}. ${line[i]}, ` }
      else { output += `${i+1}. ${line[i]}` }
    }
    return output;
  }
}