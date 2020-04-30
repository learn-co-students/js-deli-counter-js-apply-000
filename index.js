let takeANumber = (currentLine, newName) => {
  currentLine.push(newName);
  return 'Welcome, ' + newName + '. You are number ' + currentLine.length +' in line.';
};

let nowServing = (line) => {
  if (line.length === 0) {
     return 'There is nobody waiting to be served!';
  } else {
    let first = line.shift();
    return  'Currently serving ' + first + '.';
  }
};

 let currentLine = (line) => {
   if (line.length === 0) {
      return 'The line is currently empty.';
   } else {
     let ret = 'The line is currently: ';
     for (let i=0; i<line.length - 1; i++){
       ret += (i + 1) + ". " + line[i] + ", ";
     }
     let last = line.length + ". " + line[line.length - 1];
    return ret + last;
   }
 };