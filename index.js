function takeANumber(arr, name){
  arr.push(name);
return ('Welcome, ' + name + '. You are number ' + (arr.indexOf(name)+1) + ' in line.');

}

function nowServing(arr){
  var next = [];
  if (arr.length<1)
  {return ('There is nobody waiting to be served!')}
  else{ next.push(arr[0]);
  arr.shift();
  return ( 'Currently serving ' + next[0] + '.');
  }
}

function currentLine(line){
  var newArr = [];
  let i = 0;
  while (line.length> i){
    newArr.push(' ' + [i+1] + '. ' + line[i])
    i++;
  }
  if (line.length === 0){
    return ('The line is currently empty.');
  } else
  return ('The line is currently:' + newArr);
}