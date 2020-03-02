function takeANumber(line, name) {
  line.push(name);
  
  var num = line.indexOf(name) + 1;
  var greeting = 'Welcome, ' + name + '. You are number ' + num + ' in line.';
  
  return greeting;
}

function nowServing(line) {
  var nextUp = line[0];
  var announcement = 'Currently serving ' + nextUp;
  
  line.shift(nextUp);
  
  if (nextUp === undefined) {
    return 'There is nobody waiting to be served!';
  }
  
  return 'Currently serving ' + nextUp + '.';
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  
  var lineSentence = 'The line is currently: ';
  
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    
    lineSentence += i + 1 + '. ' + name + ', '; 
  }
  
  return lineSentence.slice(0, lineSentence.length - 2);
}