//#1take a # function
function takeANumber(katzDeliLine, nwPrsnInLn){
 let frstGrtng = "Welcome, ";
 let frstLnPstn = "You are number ";
 let scndLnPstn = " in line.";
 let prd= ". ";
 katzDeliLine.push(nwPrsnInLn);
 let nmbrPstn = katzDeliLine.length;
 let rtndLn = frstGrtng+katzDeliLine[nmbrPstn-1]+prd+frstLnPstn+nmbrPstn+scndLnPstn
 return rtndLn;
}

//#2 nowServing Function
function nowServing(katzDeliLine){
  let stmnt = "Currently serving "
  let prd= ".";
  let nmbrPstn = katzDeliLine.length;
  if(nmbrPstn > 0){
  let rtndInfo = stmnt+katzDeliLine[0]+prd;
  katzDeliLine.shift();
  return rtndInfo;
  }else{
    return"There is nobody waiting to be served!"
  }
}


//#3 currentLine function
function currentLine(katzDeliLine) {
    let stmnt = 'The line is currently: ';
    let lnLngth = katzDeliLine.length;
    if(lnLngth===0){
      return 'The line is currently empty.'//if there is no one in the line
    }else{ //if there is someone in the line
      let i = 0;
      let rtndLn = '';
      while(i != katzDeliLine.length){
        let echPstn = parseInt(katzDeliLine.indexOf(katzDeliLine[i]))+1;
        if(echPstn!=3){// added use case to add the commas
        rtndLn = rtndLn+echPstn+". "+katzDeliLine[i]+", ";
      }else{
        rtndLn = rtndLn+echPstn+". "+katzDeliLine[i];
      }
      i++;
      }
      return stmnt+rtndLn;
    }
}

var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine);
