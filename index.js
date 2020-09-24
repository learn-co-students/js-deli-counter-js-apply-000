function takeANumber (katzDeliLine,name){
 katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(`${name}`)+1} in line.`;
}

function nowServing(katzDeliLine){
let firstPerson = katzDeliLine.shift();

if(katzDeliLine.length === 0){
return "There is nobody waiting to be served!"
}
else{
  return `Currently serving ${firstPerson}.`;
}

}

function currentLine(katzDeliLine){
 if(katzDeliLine.length === 0){
   return 'The line is currently empty.'
 }
 let mystr = 'The line is currently: ';
 for( let i=0;i<katzDeliLine.length;i++){
  if(i !== katzDeliLine.length-1){
  mystr+=`${i+1}. ${katzDeliLine[i]}, `
  }
  else{
    mystr+= `${i+1}. ${katzDeliLine[i]}`
  }
 }
 return mystr
}