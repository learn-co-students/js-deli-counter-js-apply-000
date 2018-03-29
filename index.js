//post 2018.3.29 technical interview, takeANumber works with the katzDeli array as a list of unique numerical identifiers
//not integers, that will increment every time one is taken. name and strings for names are not used as parameters

//setting this variable here isn't necessary - serves as a reminder
//on how to use the array as a parameter
//let katzDeli = [];

//two parameters here: the array and a string that acts as the 'name'
/*function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
*/
let counter = 1;
function takeANumber(katzDeli){
  counter++;
  katzDeli.push(counter);
  return (`Now serving number ${counter}.`);
}

//why does the below actually shift that first element in addition to just return the string?
//conditional statement, then defining statement
//below is an example of 'defensive programming'
function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return (`There is nobody waiting to be served!`);
  }
  return (`Currently serving ${katzDeli.shift()}.`);
}


function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return (`The line is currently empty.`);
  }
  let lineText = (`The line is currently: `);
  for (let i = 0; i < katzDeli.length; i++){
    //here i'm trying to concatenate my 'lineText' string,
    //and a string naming the place in line plus the person at that array index
    //using template literals
    lineText += `${[i + 1]}. ${katzDeli[i]}`;
    if (i + 1 != katzDeli.length){
      lineText += `, `;
    }
  }
return lineText;
}
