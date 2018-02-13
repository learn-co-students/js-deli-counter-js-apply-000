// 1
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

// 2
function nowServing(katzDeli) {
  var newFirstPerson = katzDeli.shift();
  if (katzDeli.length > 0) {
      return(`Currently serving ${newFirstPerson}.`);
    } else {
  return (`There is nobody waiting to be served!`);
    }
};

function currentLine(katzDeli) {
  var line = [];
  for (var i = 0; i < katzDeli.length; i++) {
    line.push(` ${i+1}. ${katzDeli[i]}`);
  }
    if (katzDeli.length > 0) {
      return (`The line is currently:${line}`);
  } else {
      return (`The line is currently empty.`);
  }
}
