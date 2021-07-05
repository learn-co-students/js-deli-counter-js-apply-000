var katzDeli = [];

function takeANumber(theLine, name){
  var pos = theLine.push(name);
  return `Welcome, ${name}. You are number ${pos} in line.`
}

function nowServing(theLine){
  if(theLine.length < 1){
    return "There is nobody waiting to be served!"
  }else {
    var name = theLine.shift()
    return `Currently serving ${name}.`
  }

}

function currentLine (theLine){
  if(theLine.length < 1){
    return "The line is currently empty."
  }else {
    var i =0;
    var temp =""
    while(theLine[i]){
      var name = theLine[i]
      temp = temp + `${i+1}. ${name}, `
      i++
    }
    temp = temp.slice(0, temp.length-2)
    temp = "The line is currently: " + temp
    return temp
  }
}

/////////////////////before completing the bootcamp course////////
// //greet
// function takeANumber(theLine, person){
//   var pos = theLine.push(person);
//   var result = "Welcome, " +person +". You are number " +pos + " in line."
//   return result;
//
// }
//
// //remind
// function currentLine(theLine){
//   var result = "The line is currently: ";
//   var temp = "";
//   var i =0;
//
//   if(!theLine[i]){
//     return "The line is currently empty.";
//   }
//
//   for (;theLine[i];i++){
//     var j =i+1;
//     if(i ==0 )
//     {
//       temp = j + ". " + theLine[i]
//     }else{
//       temp = temp+", " + j + ". " + theLine[i]
//     }
//   }
//
//   return result+temp;
//
// }
//
// //inform
// function nowServing(theLine){
// <<<<<<< HEAD
//   if(!theLine[0]){
//     return "There is nobody waiting to be served!"
//   }
// =======
// >>>>>>> 145daaf9122d17f2d64d7979b0f121a03ad4a499
//   var result= "Currently serving "
//
//   var person = theLine.shift();
//   result = result + person +"."
//   return result;
//
// }
