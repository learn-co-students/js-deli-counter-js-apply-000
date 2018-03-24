var katzDeliLine = [];
katzDeliLine = ["Ada", "Grace", "Kent"];
function takeANumber(katzDeliLine, newName){
  if (katzDeliLine.length > 0)
  {
    var newNumber = katzDeliLine.length;
    //if newName has more than 1 person
    if (newName.length > 1)
    {
      var i = 0;
      do  {
      katzDeliLine.push(newName[i]);
        i++;
      }
      while (i < newName.length) ;
      
      
    }
  katzDeliLine.push[newName];
  var newPerson = "katzDeliLine[newNumber - 1]";
  var message = "Welcome, " + newName + ". You are number " + (katzDeliLine.length + 1) + " in line";
    return message;
  }
  message = "The line is currently empty";
 // return message;
}

function nowServing()
{
  if (katzDeliLine.length > 0)
  {
 var removePerson = katzDeliLine[0];
 
 var index = katzDeliLine.indexOf(removePerson);
 if (index > -1){
 katzDeliLine.splice(index, 1);
 

  return "Currently serving " + (removePerson );
 } 
  }
  return "There is nobody waiting to be served!";
}

//currentLine(){
//
  //
  //message =
  //return "The line is currently: " + 
  
//}
