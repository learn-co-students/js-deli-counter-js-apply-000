function takeANumber(position,name){
  position.push(name);
  return 'Welcome, ' + name +'. You are number ' + position.length + ' in line.'
}

function nowServing(position){
  if (position.length > 0){
    return 'Currently serving ' + position.shift() + '.'
  } else{
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(position) {
    var output = [];
    if (position.length > 0) {
      for(var i = 0; i < position.length; i++) {
        output += (i + 1) + ". " + position[i] + ", ";
      }
      output = output.slice(0, output.length - 2);
      return "The line is currently: " + output;
    } else {
        return "The line is currently empty.";
    }
}