var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". " + "You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextperson = katzDeliLine.shift() // .shift removes 0th place but returns it
    return "Currently serving " + nextperson + ".";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var nil = [];
    for (var i = 0; i < katzDeliLine.length; i++)
    nil.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  return "The line is currently:" + nil;
}







//function takeANumber(katzDeli) {
  //let i = 1;
  //let otherDeli = ["Ada"];
  //while(i<otherDeli.length) {
    //katzDeli= "Welcome, " + otherDeli[i] + ". " + "You are number " + katzDeli[i] + " in line.";
      //i++;
  //}
  //return katzDeli;
//}
  
  
  
  
  // messy below
 // for (let i=0; i < katzDeli.length; i++) {
   // const welcome= "Welcome, " + otherDeli[i] + ". " + "You are number " + katzDeli[i] + "in line.";
  //  arr.push(welcome);
//  }
//  return welcome
// }
  // messy above