function takeANumber ( line, person) {
  line.push(person);
  return line.length;
};

function nowServing ( line){
  if(line == null) return 'There is nobody waiting to be served!';
  else return line.shift();
};

function currentLine ( line){
  var s = 'The line is currently';
  if(line == null) return s + ' empty.';
  s += ':';
  for(var i = 0; i < line.length; i++) s += ' ${line[i]}';
  s+= '.';
};
