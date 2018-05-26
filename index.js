var katzDeli = []

function takeANumber(katzDeliLine, personName){

  katzDeliLine.push(personName);

  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`

};

function nowServing(katzDeliLine){

  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  };
};

function currentLine(katzDeliLine){

  var newArray = []

  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (let i=0; i < katzDeliLine.length; i++){
      newArray.push(" " + (i+1) + ". " + katzDeliLine[i])
    };
    return "The line is currently:" + newArray.toString()
  };
};

//   do {
//     return "The line is currently empty."
//   } while (katzDeliLine.length === 0);
//
// do {
//   for (let i=0; i<katzDeliLine.length; i++){
//       katzDeliLine.unshift(katzDeliLine.length + ". ")
//       var newLine = katzDeliLine.toString();
//     };
//     return `The line is currently: ${newLine}`
//   } while (katzDeliLine.length > 0)
// }
