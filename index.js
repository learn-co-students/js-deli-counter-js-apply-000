"use strict";

function takeANumber(deliLine,newPerson) {

  deliLine.push(newPerson);
  
  return `Welcome, ${newPerson}. You are number ${deliLine.length} in line.`;
}

function nowServing (deliLine) {
  const emptyLineMsg="There is nobody waiting to be served!";
  const returnPrefix="Currently serving ";
  let returnMsg="";
  
  const currentCustomer= deliLine.shift();
  //shift() returns undefined for emply array:
    //( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift#Syntax )
  if (currentCustomer) {
    returnMsg = `${returnPrefix + currentCustomer}.` ;
  } else {
    returnMsg=emptyLineMsg;
  }
  
  return returnMsg;
}

function currentLine (deliLine) {
  
  const emptyLineSuffix=" empty.";
  let lineMsg="The line is currently";
  lineMsg += (deliLine.length)? ":" : emptyLineSuffix;
    
  for (let i=0; i<deliLine.length; i++) {
    let place=i+1;
    let name=deliLine[i];
    lineMsg += ` ${place}. ${name}`;
    if (place < deliLine.length) {
      lineMsg += ","; 
    }
  }
  
  
  return lineMsg;
}