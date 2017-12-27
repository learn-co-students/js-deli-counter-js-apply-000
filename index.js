function takeANumber(arr, str) {
  arr.push(str);
  let position = arr.length;
  let result = `Welcome, ${str}. You are number ${position} in line.`;
  return result;
}

function nowServing(arr) {
  if (arr.length >= 1) {
    let firstPerson = arr.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr) {
  let result = 'The line is currently: ';
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
        result += `${i + 1}. ${arr[i]}, `;
      } else {
        result += `${i + 1}. ${arr[i]}`;
      }
    }
  } else {
    result = "The line is currently empty.";
  }
  return result; 
}

