var katzDeliLine = []; 
function takeANumber(katzDeli, name){
 // katzDeli = ["Ada", "Grace", "Kent"]
 // otherDeli.concat("Ada", "Grace", "Kent")
  var counter;
  var n
//for (counter = 0 ; counter <= otherDeli.length-1; counter++ ){

  katzDeli.push(name)
  var i = katzDeli.indexOf(name)
  //var arr = otherDeli 
   
   //katzDeli = arr
    
   var e = i + 1

   return "Welcome, " + name + "." +  " You are number " + e + " in line."
 

}

function nowServing(deliLine){
// deliLine = ["Steven", "Blake", "Avi"]

  //for (counter = 0; counter <= deliLine[0].length-1; counter++){
 if (deliLine && deliLine.length){
 
  /* katzDeliLine.push(deliLine)
     var arr = deliLine
     katzDeliLine = arr*/
    
      var an = deliLine.shift()
      
   
   return "Currently serving " + an +  '.'
  }
 
  else {
    return "There is nobody waiting to be served!"
  
   }
     
  }

function currentLine(a){
 // a = [" Bill", " Jane", "Ann"]
  var arr = []
  var counter
 //for(counter = 0; counter <=arr[0].length-1; counter++){
  //for (var i =0; i<=a.length-1; i++){
       if (a  && a.length) {
        for(var i = 0; i< a.length; i++){
          arr.push( i+1 + ". " +a[i])
}
          return "The line is currently: " + arr.join(", ")
        
         }
        
       
         
    else {
          return "The line is currently empty."
        }
       
// }
 
 
  }