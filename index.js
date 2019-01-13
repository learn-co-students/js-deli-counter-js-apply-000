//declare a function that take 2 parameters
var takeANumber = function(katzDeli, newCustomer) {

  if (katzDeli.length > 0);
  katzDeli.push(newCustomer);
  return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
}

//testing the function by passing an argument through it
  takeANumber(katzDeli, 'Ada');
  takeANumber(katzDeli, 'Grace');


function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0)
  {
    return 'There is nobody waiting to be served!';
  }
    var customer = katzDeliLine.shift();
      return 'currently serving ' + customer + '.';
}

 function currentLine (katzDeliLine) {
   //if statement to check if condition equal 0;
   //then return "The line is empty"
   if (katzDeliLine.length === 0)
   {
     return 'The line is currently empty.';
   }

      var customerPlusNumber = [];

      //for loop through the array
       for (var i = 0; i < katzDeliLine.length; i++)
   {
     customerPlusNumber.push(i + 1 + '. ' + katzDeliLine[i])
   }
   //used join() method to return a string joining the elements of the array
     return 'The line is currently: ' + customerPlusNumber.join(', ');
}


//declared a funcion called nowServing with parameter katzDeliLine
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0)
  {
    return 'There is nobody waiting to be served!';
  }
     var customer = katzDeliLine.shift();

     return 'Currently serving ' + customer + '.';
}

const deliLine = ['Steven', 'Blake', 'Avi'];
 console.log(deliLine);
