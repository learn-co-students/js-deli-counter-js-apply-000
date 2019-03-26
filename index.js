
// Deli Counter Lab

// 1-3 
function takeANumber(ppline, name){
  ppline.push(name) 
  
  var res = ("Welcome, " + name + ". You are number " + (ppline.length) + " in line.")
  return res;
} 


// nowServing function
function nowServing(names) {
  
    if (names.length === 0)
          {
      return "There is nobody waiting to be served!";
          }
  
    else {
        var output = "Currently serving " + names.shift() + ".";
        
        // var e = names.shift();
        // console.log(names);
        // return "Currently serving " + e + ".";
      return output;
    }
}




// currentLine
function currentLine(names) {
  
  if (names.length === 0)
          {
      return "The line is currently empty.";
          }
  
    else {
      var sentence = "The line is currently: ";
        
        for (var i = 0; i < names.length -1; i++)
                
                {
                //var comma = [", "];
                sentence += `${i + 1}. ${names[i]}, `
                      
                }
           
            }
          sentence += `${names.length}. ` + names[names.length - 1];
       return sentence
}    
      
      
//       var sentence = "The line is currently: ";
            
//               for (var i = 0; i < names.length; i++)
//                 {
//                     if (i < names.length - 1) 
//                         {var comma = ", ";}
//                     else {var comma = ""}
//                     while (j < names.length - 1) 
//                       {
//                     var comma = ", ";
//                 sentence += `${i + 1}. ${names[i]}`
                      
//                       j++;
//                       }
                      
//                   }
            
//             }
          
//       // return sentence
    
// }

