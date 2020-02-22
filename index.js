const takeANumber = function(arr, newName) {
  arr.push(newName);
  let placeInLine = "";
  for(let i=0;i<arr.length;i++) {
    if(arr[i] === newName){
      placeInLine = arr.indexOf(arr[i]) + 1;
    }
  }
  return `Welcome, ${newName}. You are number ${placeInLine} in line.`
}


const nowServing = function(arr) {
  const currentPerson = arr.shift();
  if(currentPerson===undefined) {
    return `There is nobody waiting to be served!`;
  }
  return `Currently serving ${currentPerson}.`;
}



const currentLine = function(arr) {
 let str = `The line is currently`;
 let newArr = [];
 
 if(arr.length===0) {
   return `${str} empty.`;
 }
 
 for(let i=0;i<arr.length; i++) {
   newArr.push(`${arr.indexOf(arr[i]) + 1}. ${arr[i]}`);
 }
 return `${str}: ${newArr.join(', ')}`
}
  