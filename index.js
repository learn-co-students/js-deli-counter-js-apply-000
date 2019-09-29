var i;

function takeANumber(Array, string)
{
  var numberinline = Array.length + 1;

  Array.push(string);
  
  
    console.log(Array);
  
    return "Welcome, " + string + ". You are number " + numberinline  + " in line." ;
   
}


function nowServing(Array)
{
 
 if (Array.length === 0)
 {
   return "There is nobody waiting to be served!";
 }
 
 else
 {
   var firstinline = Array[0];
      Array.splice(0,1);

   console.log(Array);

   return "Currently serving " + firstinline  + ".";
   
 }
 
}
 
 
 
 
 function currentLine (Array)
{
 
 if (Array.length === 0)
 {
   return "The line is currently empty.";
 }
 
 else
 {
        var thestring  = "";
        
   for ( i = 0 ; i < Array.length ; ++i)
   {
     var position = i +1;
   

if (i === Array.length -1)
{
     thestring = thestring + position  + ". " + Array[i] ;
   return "The line is currently: " + thestring;

}
else
{
       thestring = thestring + position  + ". " + Array[i] + ", "
}

   }
  
   }
 
}
