// DeliCounter Lab
// 1. Add elements to an array
// 2. Return items from an array
// 3. Iterate through an array
// 4. Pass an array as a function parameter
//
// Instructions:
//
// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.
// At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,
// var katzDeli = [];
//
//


// PART 1 - Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people, katzDeliLine,
// along with the new person's name as parameters.
// The function should return their position in line.
// And don't go being too programmer-y and give them their index.
// These are normal people. If they are 7th in line, tell them that.
// Don't get their hopes up by telling them they are number 6 in line.

var takeANumber = function(katzDeli, newCustomer) {

        if (katzDeli.length > 0);
        katzDeli.push(newCustomer);
        return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
   }

// 1. Declare our function - accepts 2 parameters - katzDeli & newCustomer
// 2. Check our conditionals - if katzDeliLength.length > 0
// 3. Push our new customer to the end of the Array
// 4. Return our string that outputs the position of the new customer
// 5. Test our function - make sure to pass arguments through the function
    //   takeANumber(katzDeli, 'Ada');



// PART 2 - Build a function nowServing.
// This function should return the first person in line and then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"



function nowServing (katzDeliLine) { //declared function
    if(katzDeliLine.length===0) { //checks if length of array(katzDeli) is = to 0
    return 'There is nobody waiting to be served!'; //returns string no one is waiting
  }
  var customer = katzDeliLine.shift(); // shift array of people
  return "Currently serving " + customer + "."; //return string with customer name
  }


// //1. Declare our function - taking our perameter - current line = katzDeliLine
// //2. Check our conditionals - if equal to 0 - return "There is nobody waiting to be served!"
// //3. Remove first person from the line and return string
// //4. Return string "Currently serving - first person with customer name"
// //5. Test our fuction - make sure it works!


//   describe('nowServing', () => {
//     it('returns the line is empty when no one is on line', () => {
//       expect(nowServing([])).toEqual("There is nobody waiting to be served!");
//     });

//     it('returns an announcement about the person it is serving, and shifts the line', () => {
//       const deliLine = ["Steven", "Blake", "Avi"]
//       expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
//       expect(deliLine).toEqual(["Blake", "Avi"]);
//     });
//   });


// PART 3 Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return
//        "The line is currently: 1. Ada, 2. Grace".
//If there is nobody in line, it should return "The line is currently empty."

var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "The line is currently empty.";
}
    var customerAndNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
  }
  return "The line is currently: " + customerAndNumber.join(", ");
 }

// 1. Declare our function - currentLine - take in the parameter katzDeliLine
// 2. Check our condistionals - if equal to 0 - return "The line is currenlty empty."
// 3. loop through our array = our current deli line / katzDeliLine
// 4. Push the customer and taking the index / their current position in line -
// 5. Return string - by joining all the elements of the array using .join method



function nowServing (katzDeliLine) { //declared function
    if(katzDeliLine.length===0) { //checks if length of array(katzDeli) is = to 0
    return 'There is nobody waiting to be served!'; //returns string no one is waiting
 }

     var customer = katzDeliLine.shift(); // shift array of people

    return "Currently serving " + customer + "." ; //return string with customer name
 }

 const deliLine = ["Steven", "Blake", "Avi"];
 console.log(deliLine);
