
function takeANumber(katzDeliLine, name) {
      katzDeliLine.push(name)
      return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}



// takeANumber(katzDeliLine, "Ada")

function nowServing(katzDeliLine) {
	if (katzDeliLine[0] === undefined) {
		return "There is nobody waiting to be served!"
	} else {
		var firstInLine = katzDeliLine.shift()
		return "Currently serving " + firstInLine + "."
	}

}

// console.log(nowServing())
// console.log(katzDeliLine)
/* 3. Build a function `currentLine` that returns the current line.
For example, if `katzDeliLine` is currently `["Ada", "Grace"]`,
`currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada 2. Grace"`.
 If there is nobody in line, it should return `"The line is currently empty."`
 */

 function currentLine(line) {
   var lineNum = []
   for (var i = 0; i < line.length; i++) {
 		if (line.length === 0) {
 			return "The line is currently empty.";
 		} else {
 			lineNum.push((line.indexOf(line[i]) + 1) + ". " + line[i] + " ")
 		}
 	}
   return "The line is currently:" + lineNum + " "

 }
