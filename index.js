var katzDeliLine = []
var katzDeli=[]

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push (name);

  var linenumber = katzDeliLine.length

  return (`Welcome, ${name}. You are number ${linenumber} in line.`)

}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length > 0) {

    return `Currently serving ${katzDeliLine.shift()}.`
  }
     else {

       return 'There is nobody waiting to be served!';
   }
}


function currentLine(katzDeliLine) {
  var order = [];

  if (katzDeliLine.length > 0) {
/*in regards to scope. the for loop of i is only when katzdeli has a line
or katzDeliLine.length>0. the for loop has to go in the if statement to run properly.
*/
   for (var i = 0; i < katzDeliLine.length; i++) {
     var customer = katzDeliLine[i];
     order.push ((i+1) + ". " + customer);
     /* push the code for "1. name" into an empty array so that we can access it as a whole
     in the return. now the array order is consist of "1. steven", "2, maria", "3. becky" ...*/

   } return "The line is currently: " + order.join(', ');
   /*.join combines the elements of the order array seperated by a ','. makes the function Pass
   */
 }    else {

      return "The line is currently empty.";
     }
}
