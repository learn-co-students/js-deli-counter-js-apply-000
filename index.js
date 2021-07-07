//var jettiesLine = ['Belinda', 'Will', 'Pishi']

function takeANumber(jettiesLine, name){
  jettiesLine.push(name);
  var string = `Welcome, ${name}. You are number ${jettiesLine.length} in line.`;
  return string;
}

function nowServing(jettiesLine){
  if(jettiesLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    var firstCustomer = jettiesLine.splice(0,1);
    var currentServe = `Currently serving ${firstCustomer}.`;
  }
  return currentServe; 
}

function currentLine(jettiesLine){
  if(jettiesLine.length === 0){
    return 'The line is currently empty.';
  }
  else{
    var i=0;
    var positionAndName = []; //empty array to push string into
    while(i<jettiesLine.length){
      positionAndName.push(` ${i+1}. ${jettiesLine[i]}`);
      i++;
    }
  }
  return `The line is currently:${positionAndName}`; 
}

