//takeANumber should accept two parameters
//takeANumber(#,nameofnewperson){}
//Return a welcome messsage including the new person's name and position in line, no index.

function takeANumber(deliarray,customername){
  for (var i=1; i< customername.length;)i++;
    deliarray.push(customername);
  return ("Welcome, " + customername + "." + " You are number " + `${deliarray.length}` + " in line.")}

function nowServing(katzDeliLine){
      if (katzDeliLine.shift() === "undefined");
       return "There is nobody waiting to be served!";
    } else {
        return katzDeliLine.shift();} 
