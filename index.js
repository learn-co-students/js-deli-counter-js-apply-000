var takeANumber = function(katzDeli, Customer) {
    
    if (katzDeli.length > 0);
        katzDeli.push(Customer);
        return ('Welcome, ' + Customer + '. You are number ' + katzDeli.length + ' in line.');
};
 function nowServing (katzDeliLine) { 
  
     if(katzDeliLine.length===0) {
        return 'There is nobody waiting to be served!'; 
     }
 
    var servingcustomer = katzDeliLine.shift(); 
        return "Currently serving " + servingcustomer + "."; 
}
 var currentLine = function (katzDeliLine) {
     if (katzDeliLine.length===0) {
        return "The line is currently empty.";
    }
    
    var customerNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
        customerNumber.push(i + 1 + ". " + katzDeliLine[i]);
    }
    
    return "The line is currently: " + customerNumber.join(", ");
};
 