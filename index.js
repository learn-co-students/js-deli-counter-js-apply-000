//takeANumber should accept two parameters
//takeANumber(#,nameofnewperson){}
//Return a welcome messsage including the new person's name and position in line, no index.

function takeANumber(deliarray,customername){
  for (var i=1; i< customername.length;)i++;
  for (var j=0; j< deliarray.length;) j++; {
    deliarray.push( "Welcome, " + customername + "." + " You are number " + deliarray[j] + "in line.");
  }
  return deliarray;}
