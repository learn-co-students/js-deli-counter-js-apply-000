

function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)  //will push the name to the end of the array
//return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`  //The .length method returns the length of the array on which the method is operated.
//<<<<<<< HEAD
//=======


//>>>>>>> 073afe217fb0fdbe041c6a6048551d1d949b7cc7
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {  // (!katzDeliLine.length) ? can we go over the ! Not logical operator?   == vs. ===?
    return "There is nobody waiting to be served!"
    }
//<<<<<<< HEAD
    else {
      return `Currently serving ${katzDeliLine.shift()}.`;    // shift method removes the first element from the array & returns that removed element- mutates array length
    //  return "Currently serving " + katzDeliLine.shift() + ".";
    }
  }

//    ...Other Option 1...
//    var shiftLine = katzDeliLine.shift();   //  The .shift method in Javascript removes the first item of an array & then RETURNS that item
//    return "Currently serving " + shiftLine + ".";

// =======
// >>>>>>> 073afe217fb0fdbe041c6a6048551d1d949b7cc7

//    ...Other Option 2...
//    var name = katzDeliLine[0];     //  Who is at index 0?
//    katzDeliLine.splice(0,1)       //  Removes the fist person in the line at index 0
//    return "Currently serving " + name + ".";
//    return `Currently serving ${name}.`;  } }

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {  // (!katzDeliLine.length) ? can we go over the ! Not logical operator?  == vs. ===?
    return "The line is currently empty."
    }
    for (var i=0; i<katzDeliLine.length; i++) {  // iterations, using a for loop for new array
        line.push(i+1 + ". " + katzDeliLine[i]);
    }
 return "The line is currently: " + line.join(', ');
 }
 // ...Other Option 1...
  // else {
        // for (var i=0; i<katzDeliLine.length; i++) {
        // line += (i+1) + ". " +katzDeliLine[i] + ", ";
        // }
        // line = line.slice(0, line.length-2);  // removes the last 2 characters the , and space from the end of the aray

    // return "The line is currently: " + line
    // return `The line is currently: ${line}`; }

 //    ...Other Option 2...
 //    var myString = `The line is currently: 1. ${katzDeliLine[0]}`
 //    for(let i = 1; i<katzDeliLine.length;i++){
 //    myString += `, ${i+1}. ${katzDeliLine[i]}`
 //    }
 //    return myString
 //    }
