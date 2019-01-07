function takeANumber ( line, person) {
  line.push(person);
  return 'Welcome, ' + person + '. You are number ' + line.length + ' in line.';
};

function nowServing ( line){
  if(line.length <= 0) return 'There is nobody waiting to be served!';
  else return 'Currently serving ' + line.shift() + '.';
};

function currentLine ( line){
  var s = 'The line is currently:';
  for(var i = 0; i < line.length; i++){
       s += ' ';
       s += (i+1);
       s += '. ';
       s += line[i];
       if(i < line.length - 1)s += ','
  }
  if (s  == 'The line is currently:') return 'The line is currently empty.';
  return s;
};
