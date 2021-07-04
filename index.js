// var katzDeli = [];
// function takeANumber(katzDeli, name) {
//   katzDeli.push(`${name}`);
//   return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
// }
// var katzDeli = [];
// function nowServing(katzDeli) {
//   let i = 0;
//   while (i < katzDeli.length) {
//     i++;
//   }
//   if (katzDeli.length === 0) {
//     return "There is nobody waiting to be served!";
//   }
//   else
//   return (`Currently serving ${katzDeli.shift()}.`);
// }


// var line = [];


// function currentLine(katzDeli) {
//   let i = 0;
//   while (i < katzDeli.length) {
//     line.push(` `+[i+1]+`. `  + katzDeli[i])
//     i++;
//   }
//   if (katzDeli.length === 0) {
//     return "The line is currently empty.";
//   } else
//   return(`The line is currently:` + line);
// }


// function takeANumber(katzDeli, name){
//   katzDeli.push(`${name}`);
//   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
// }
// var katzDeli = [];
// function nowServing(katzDeli){
//     if (katzDeli.length === 0)
//     return "There is nobody waiting to be served!";
  
//   else
//   {
//     var person = katzDeli.shift();
//     return `Currently serving ${person}.`;
//   }
  
// }


// function currentLine(katzDeli, name){
//   if (katzDeli.length === 0){
//     return `The line is currently empty.`;
//   } else{
//     var current = [];
//     let i = 0;
//     for (i = 0 ; i < katzDeli.length; i++){
//       current.push((i + 1) + ". " + katzDeli[i] + " ");
//       i++;
      
//     }return `The line is currently: ${current}`;
    
  
//   }
// }


var katzDeli = [];

function takeANumber(katzDeli, name){
  for (var i = 0; i <katzDeli.length ; i++){
    katzDeli.push(`${name}`)
  }
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}
function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return `There is nobody waiting to be served!`
    } else{
      var katzDeliline = katzDeli.push();
     return `Now serving ${katzDeliline}`;
    }
    
}




































