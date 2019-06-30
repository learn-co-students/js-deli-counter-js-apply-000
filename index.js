function takeANumber(line, name){
  var say;
  
  line.push(name);
  var i = line.length;
  
  say = 'Welcome, ' + name + '. You are number ' + i + ' in line.'
  return say;
}

function nowServing(line){
  if (line.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    var x = line.shift();
    return 'Currently serving ' + x + '.'
  }
}

function currentLine(line){
  if(line.length === 0){
    return 'The line is currently empty.'
  } else {
    var i;
    for (i = 0; i < line.length; i++){
      var entry =' ' + (i + 1) + '. '
      line[i] = entry.concat(line[i])
    }
    return 'The line is currently:' + line 
  }
}