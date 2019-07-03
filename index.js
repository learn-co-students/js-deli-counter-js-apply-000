var katzDeliLine = []; 
function takeANumber(katzDeli, otherDeli){
 // katzDeli = ["Ada", "Grace", "Kent"]
 // otherDeli.concat("Ada", "Grace", "Kent")
  var counter;
  var n
//for (counter = 0 ; counter <= otherDeli.length-1; counter++ ){

  katzDeli.push(otherDeli)
  var i = katzDeli.indexOf(otherDeli)
  var arr = otherDeli 
   
   katzDeli = arr
    
   var e = i + 1

   return "Welcome, " + katzDeli + "." +  " You are number " + e + " in line."
 

}

function nowServing(deliLine){
// deliLine = ["Steven", "Blake", "Avi"]

  //for (counter = 0; counter <= deliLine[0].length-1; counter++){
 if (deliLine && deliLine.length){
 
   katzDeliLine.push(deliLine)
     var arr = deliLine
     katzDeliLine = arr
    
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
        
          //  katzDeliLine.push(a)
            var e = a
            katzDeliLine = a
          return "The line is currently:" + " 1." + " " +katzDeliLine[0] + "," + " 2." + " "+katzDeliLine[1] + "," + " 3." + " " +katzDeliLine[2]
         }
        
       
         
    else {
          return "The line is currently empty."
        }
       
// }
 
 
  }