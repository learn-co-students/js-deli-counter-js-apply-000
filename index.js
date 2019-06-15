let takeANumber = (katzDeliLine, name) =>{
  katzDeliLine.push(name);
  let lineUp =`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
  return lineUp;
}
let nowServing = (katzDeliLine) =>{
  
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
  return `Currently serving ${katzDeliLine.shift()}.`
  }
  return katzDeliLine;
  
  
}
let currentLine = (katzDeliLine) =>{
  let inline =[];
  if( katzDeliLine.length ===0){
    return 'The line is currently empty.'
  }
  for(var i = 0; i < katzDeliLine.length; i++ ){
    inline.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  inline= inline.join( ", "+ "");
  return `The line is currently: ` + inline
  
}