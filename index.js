var katzDeli = [];
var takeANumber = function(katzDeli , newCustomer) {
  if (katzDeli.length > 0 );
    katzDeli.push(newCustomer);
    return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')

} 

takeANumber(katzDeli,'Ada');

function nowServing (katzDeliLine) { 
  if(katzDeliLine.length===0) { 
      return 'There is nobody waiting to be served!';
}
    var customer = katzDeliLine.shift();
   return "Currently serving " + customer + ".";
}

takeANumber(katzDeliLine,"Ada");

describe('nowServing', ()=> {
  it('returns the line is empty when no one is on line', () => {
    expect(nowServing([]))
    .toEqual("There is nobody waiting to be served!");
  });
  it('returns an announcement about the person it is serving, and shifts the line', () => {
    const deliLine = ["Steven","Blake","Avi"];
    expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
    expect(deliLine).toEqual(["Blake","Avi"]);
  });
});

function currentLine(katzDeliLine) {
  if  (katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  }
var customerAndNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
 }
   return "The line is currently: " + customerAndNumber.join(", ");
}
function nowServing (katzDeliLine) { 
    if (katzDeliLine.length === 0) {
   return 'There is nobody waiting to be served!'; 
 }
    var customer = katzDeliLine.shift();
    
   return "Currently serving " + customer + "." ;
}

const deliLine = ["Steven", "Blake", "Avi"];
console.log(deliLine);

