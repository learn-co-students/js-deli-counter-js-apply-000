var katzDeliLine = [];

function takeANumber(arrOfCustomers, customerName){
  arrOfCustomers.push(customerName)
    return `Welcome, ${customerName}. You are number ${arrOfCustomers.length} in line.`
}

function currentLine(arrOfCustomers){
  if(arrOfCustomers.length === 0) return `The line is currently empty.`
  let final = "The line is currently:";
// unused for loop
//   for(let i = 0; i < arrOfCustomers.length; i++){
    
//     if(i !== arrOfCustomers.length - 1){
      
//     final += ` ${i+1}. ${arrOfCustomers[i]},`
//   } else {
//     final += ` ${i+1}. ${arrOfCustomers[i]}`
//   }
// }
  return arrOfCustomers.reduce((a,b,c,d)=>{
    if(c !== arrOfCustomers.length - 1){
      a += ` ${c+1}. ${b},`
      } else {
        a += ` ${c+1}. ${b}`  
      }
      return a;
  },final)

// return final;
}

function nowServing(arrOfCustomers){
  if(arrOfCustomers.length === 0) return `There is nobody waiting to be served!`;
  return `Currently serving ${arrOfCustomers.shift()}.`;
}