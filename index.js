function takeANumber ( line, person) {
  line.push(person);
  return 'Welcome ' + person + ' ' + line.length + ' in line';
};

function nowServing ( line){
  if(line == null) return 'There is nobody waiting to be served!';
  else return 'Currently serving ' + line.shift() + '.';
};

function currentLine ( line){
  var s = 'The line is currently';
  if(line == null) return s + ' empty.';
  s += ':';
  for(var i = 0; i < line.length; i++) s += ' ${line[i]}';
  s+= '.';
};
