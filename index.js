function takeANumber(katzDeliLine, customerName){
    katzDeliLine.push(customerName);
    return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
  }

function nowServing(katzDeliLine){
    if(katzDeliLine.length < 1){
      return "There is nobody waiting to be served!";
    }
    let current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }


function currentLine(katzDeliLine){
    if(katzDeliLine.length < 1){
      return "The line is currently empty.";
    }
    let temp = katzDeliLine.reduce(function(a,b,i){
      return a.concat(i+1+ ". " + b);
    },[]);
    return "The line is currently: " + temp.join(', ');
}
