var arrayA = []; //array is stored globally so it can be used in the second function
var takeANumber = function(n,name){
  arrayA[n] = name; //array a stores the name of the nth person in line
  return (n+1)  //returns their exact position (non programmer-y) 
}

var nowServing = function(){
  if (arrayA[0]===null){
    "There is nobody waiting to be served!";
  } else{
    return arrayA[0];
  } arrayA.shift();
   
};

var currentLine = function(){
var statement;
 for (var i = 0; i <arrayA; i++){
   
 }
};

var currentLine = function(){
var temp = [];
 for (var i = 0;i<arrayA.length;i++){
   temp[i] = (i+1) + arrayA[i]; 
   console.log(temp[i]);
 }

var statement = 'The line is currently: ';
 if(arrayA[0]===null){
   return "The line is currently empty";
 }else{
   return statement.concat(temp.toString());
 }
};

currentLine();
