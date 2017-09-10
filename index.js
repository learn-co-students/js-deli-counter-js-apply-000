var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var num = line.length;    //avoid giving index
  return 'Welcome, ' + name + '. You are number ' + num + ' in line.'
}

function nowServing (line) {
  var customer = line.shift();
  if (!customer) {    //if there is no customer
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + customer + '.';
  }
}

function currentLine (line) {
  var list = [];
  for (var i = 0; i < line.length; i++) {
    //start counting at 1, not 0
    list.push(i+1 + '. ' + line[i]);
  }
  if (!list.length) {
    return 'The line is currently empty.'
  } else{
    var str = list.join(', ');
    return 'The line is currently: ' + str;
  }
}
