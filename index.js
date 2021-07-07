//takeANumber should accept two parameters
//takeANumber(#,nameofnewperson){}
//Return a welcome messsage including the new person's name and position in line, no index.

function takeANumber(deliarray,customername){
  for (var i=1; i< customername.length;)i++;
    deliarray.push(customername);
  return ("Welcome, " + customername + "." + " You are number " + `${deliarray.length}` + " in line.")}

function nowServing(katzDeliLine) {
      if (!katzDeliLine.length) {
       return "There is nobody waiting to be served!";
    } else {
      var firstname = katzDeliLine.shift();
      return "Currently serving " + firstname + ".";
    }
  }
  function currentLine(folksinline){
     if (!folksinline.length){
      return ("The line is currently empty.");}
    var emptyarray=[];
    for (var i=0; i< folksinline.length; i++)
     emptyarray.push( `${ i+1}` + ". " + folksinline[i]);

    return "The line is currently: " + emptyarray;
}
