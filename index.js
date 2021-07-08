// function takeANumber(katzDeliLine, name) {
//       katzDeliLine.push(name)
//   var positionInLine = katzDeliLine.length;
//
//    return `Welcome, ${name}. You are number ${positionInLine} in line.`
//
// }
// function nowServing(deliLine) {
//   if (deliLine.length < 1) {
//     return "There is nobody waiting to be served!"
//     } else {
//     var newLine = deliLine[0]
//       deliLine.shift()
//     //["Steven", "Blake", "Avi"]
//       return `Currently serving ${newLine}.`
//   }
// }
//
//
// //katzDeliLine = `
//
// // do {
// //   katzDeliLine.push('${n[i]}')
// //   n++
// // } while (katzDeliLine < n.length);
// //   return katzDeliLine[n]
//
// ================================================================================================
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    var positionInLine = katzDeliLine.length;

    return `Welcome, ${name}. You are number ${positionInLine} in line.`

}
function nowServing(deliLine) {
  if (deliLine.length < 1) {
    return "There is nobody waiting to be served!"
    } else {
    var fristLine = deliLine[0]
      deliLine.shift() //
    //["Steven", "Blake", "Avi"]
      return `Currently serving ${fristLine}.`
  }
}
function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
    //var lineIs = line.length
    //for (var i = 1; i < line.length; i++) {
    //  return `The line is currently: ${lineIs[i]}. ${line}`
    var namesInLine = []
    for (var i = 0; i < line.length; i++) {
      // var name = line[i]
      namesInLine.push(`${i + 1}. ${line[i]}`)
    }
    // ["1. Ada", "2. Grace"].join(", " ) // "1. Ada, 2. Grace"
    // var output = "The line is currently: ";
    // for (var i = 0; i < line.length; i++) {
    //   output += `${i+1}. ${line[i]},`
    // }

       return `The line is currently: ${namesInLine.join(", ")}`
    // return `The line is currently: ${line}, `
    // return output
  }
}
