

function takeANumber(array, customer){

  array.push(customer);

  return "Welcome, "+customer+ ". You are number "+ array.length + " in line.";


}


function nowServing(array){

  if (array.length==0){
    return "There is nobody waiting to be served!"

  }else {

    var templine = array[0];

    array.shift();
    return "Currently serving "+ templine+".";


  }

}


function currentLine(line){

var newarray=[];

 if(line.length == 0){

   return "The line is currently empty.";


 }else{

   for (var i=0; i<line.length; i++){

       newarray[i] = " "+(i+1)+". "+line[i];

   }

 return "The line is currently:"+newarray;

 }




}
