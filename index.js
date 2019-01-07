//At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
//
// `var katzDeli = [];`
//
// 1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
//

let katzDeliLine = [ 'Steven', 'Blake', 'Avi' ]

function takeANumber (line, name){
    //push name to end of katzDeliLine array
    line.push(name);
    //return a string and use array indexOF to find the position of the new customer and add 1 to give a non indexed number;
    return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`

}
takeANumber(katzDeliLine, "Ada");

// 2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
//

function nowServing (line){
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
        }else{
              return `Currently serving ${line.shift()}.` ;
  }
}
nowServing(katzDeliLine);
// 3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`


function currentLine (line){
  let currentLine = `The line is currently: `;
  if(line.length > 0){
    for (let i=0; i<line.length; i++){
        currentLine += `${i+1}. ${line[i]}, `;
        }
        return currentLine.slice(0 ,currentLine.length - 2);
          }else if (line.length === 0){
            return 'The line is currently empty.';
      }
}
currentLine(katzDeliLine);
