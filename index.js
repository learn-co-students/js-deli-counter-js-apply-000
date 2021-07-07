function takeANumber(arr, name){
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr) {
  if (arr.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${arr.shift()}.`;
  }

}

function currentLine(arr) {
  let x = 'The line is currently:';

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      x += ` ${i+1}. ${arr[i]},`
    }
    x = x.slice(0, x.length-1);
  }


  if (arr.length === 0) {
    x = `The line is currently empty.`;
  }

  return x;
}
