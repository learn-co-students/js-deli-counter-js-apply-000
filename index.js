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
    if(lnLngth ===0){
      return 'The line is currently empty.'
    }else{
      let i = 0;
      let rtndLn = '';
      // let echPstn = ;
      while(i != katzDeliLine.length){
        let echPstn = parseInt(katzDeliLine.indexOf(katzDeliLine[i]))+1;
        if(echPstn!=3){
        rtndLn = rtndLn+echPstn+". "+katzDeliLine[i]+", ";
      }else{
        rtndLn = rtndLn+echPstn+". "+katzDeliLine[i];
      }
    // loop and index plus 1 and concat
      i++;
      }
      return stmnt+rtndLn;
    }
}

// let nwPrsnInLn = "Steve"//prompt("What is your name?");
// let katzDeliLine = ['Ada','Grace','Kent'];
// takeANumber(katzDeliLine, nwPrsnInLn)

// test scenario
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
