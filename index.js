var takeANumber = function(katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  var welcomeMessage = `Welcome, ${newCustomer}. You are number ${katzDeli.length} in line.`;
   return welcomeMessage;
  };
var nowServing = function(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }else{
    return 'There is nobody waiting to be served!';
  }
};
var currentLine = function(katzDeliLine){
var message = "The line is currently";
var customerArr = [];

if(katzDeliLine.length > 0){
  katzDeliLine.forEach(function(element, index, array){
   customerArr.push(`${index + 1}. ${element}`);
  
  });
   var customerArrToo = customerArr.join(', ');
  return `${message}: ${customerArrToo}`;
}else{
  return `${message} empty.`;
}
};