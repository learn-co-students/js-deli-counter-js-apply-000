

var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+ name + ". You are number " +katzDeliLine.length +" in line."
  // return `${Welcome, } ${name} ${. You are number} ${katzDeliLine.lenght} ${in line.}`; 
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    // var serving = ""
    
    // serving = katzDeliLine.shift()
    return "Currently serving "+ katzDeliLine.shift() +"."
    
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    var current = "";
    for(var i=0;i<katzDeliLine.length;i++){
      current += (i+1) + ". "+ katzDeliLine[i]
      if(i<katzDeliLine.length-1){
     current+=", "
    
      }
      
    }
    return "The line is currently: "+current
      }
     
    }
  



























// var katzDeliLine = [];

// function takeANumber(katzDeliLine, name){
//   katzDeliLine.push(name);
//   return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
// }

// function nowServing(katzDeliLine){
//   if (katzDeliLine.length ===0){
//     return "There is nobody waiting to be served!"
//   }
//   else
//   {
//     var newcustomer = katzDeliLine.shift();
    
//     return "Currently serving " +newcustomer +"."


//   }
// }

// function currentLine(katzDeliLine){
//   if (katzDeliLine.length===0){
//     return "The line is currently empty."
//   }
//   else {
//     var names = '';
//     for (var i =0;i<katzDeliLine.length;i++)
//     {
//       names += `${i+1}. ${katzDeliLine[i]}`; 
//       if (i<katzDeliLine.length-1){
//         names += ", ";
//       }
//       console.log(katzDeliLine.length);
//     }
      
   
//   return "The line is currently: " + names;
//   }
// }


//     // for (var i =0; i<katzDeliLine.length;i++){
//     //   names += `${i + 1}. ${katzDeliLine[i]}`;
//     //   console.log(names);
//     //   if (i < katzDeliLine.length - 1) {
//     //     names += ', ';
//     //   }
      