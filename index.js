var katzDeli = [];

function takeANumber(katzDeliLine, customer){

    katzDeliLine.push(customer);
    var positionInLine = katzDeliLine.indexOf(customer) + 1;
    return 'Welcome, ' + customer + '. You are number '+ positionInLine + ' in line.'
}

function nowServing(line){

  if(line.length <= 0)
    return "There is nobody waiting to be served!"
  else
    var customerBeingServed = line.shift();
    return "Currently serving "+ customerBeingServed + ".";
}

function currentLine(line){
  if(line.length <= 0)
    return "The line is currently empty."
  else
    var queue = line.map( function (customer, index){
      return [index + 1, customer].join('. ');
    }).join(', ')
    return "The line is currently: " + queue;
}
