
function takeANumber(arrOfPeople,name) {
  let message = '';
  arrOfPeople.push(name);
  let index = arrOfPeople.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${index} in line.`
  }


function nowServing(arr) {
  if (arr.length !== 0) {
    let nextInLine =  arr.shift();
    let str = 'Currently serving' + ' ' +nextInLine +'.';
    return str;
  } return 'There is nobody waiting to be served!'
}


function currentLine(arr) {
  let str = 'The line is currently: '
  let lineNums = '';
  // let lineStr = str + lineNums;
  if (arr.length ===0) {
    return 'The line is currently empty.';
  }
  for (let i = 0 ; i <arr.length; i++) {
        if (i === arr.length-1) {
           lineNums += `${[i+1]}. ${arr[i]}`
        } else {
    lineNums += `${[i+1]}. ${arr[i]}, `;
    } 
  }return str + lineNums;
}

