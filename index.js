var katzDeliLine=[];
var katzDeli=[];
var stringOutput=""


function takeANumber(katzDeliLine, customer){
  //find length in line -- why doesn't this work in return statement?
  var positionInLine = (katzDeliLine.length)+1;
  //adds customer to the end of the katzDeliLine list
  katzDeliLine.push(customer)
  return("Welcome, "+customer+". You are number "+positionInLine+ " in line.")
 
}

function nowServing(katzDeliLine){
  /*results if empty list*/
  if(katzDeliLine===undefined || katzDeliLine.length==0){
    return ("There is nobody waiting to be served!")
  }
  else{stringOutput="Currently serving "+katzDeliLine[0]+"."
  katzDeliLine.splice(0,1)
  return stringOutput
  }
}

function currentLine(katzDeliLine){
  /*results if empty list*/
   if(katzDeliLine===undefined || katzDeliLine.length==0){
    return ("The line is currently empty.")
  }
  //results if single entry
  else if(katzDeliLine.length===1){
    stringOutput="The line is currently: "
    var p=katzDeliLine.length
    stringOutput+=(p+". "+katzDeliLine[p-1])
    return stringOutput
  }
  //results if multiple entries
  else{
    stringOutput="The line is currently: "
    for (var i = 0; i < katzDeliLine.length-1; i++) {
    stringOutput+=((i+1)+". "+katzDeliLine[i]+", ");
    }
    var p=katzDeliLine.length
    stringOutput+=(p+". "+katzDeliLine[p-1])
    return stringOutput
  }
}

