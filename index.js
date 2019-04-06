//var jettiesLine = ['Belinda', 'Will', 'Andrew', 'Pishi']

function takeANumber(jettiesLine, name){
  jettiesLine.push(name);
  const string = `Welcome, ${name}. You are number ${jettiesLine.length} in line.`;
  return string;
}

function nowServing(jettiesLine){
  if(jettiesLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    const firstCustomer = jettiesLine.splice(0,1);
    const currentServe = `Currently serving ${firstCustomer}.`;
  }
  return currentServe; 
}

function currentLine(jettiesLine){
  if(jettiesLine.length === 0){
    return 'The line is currently empty.';
  }
  else{
    const i=0;
    const positionAndName = []; //empty array to push string into
    while(i<jettiesLine.length){
      positionAndName.push(` ${i+1}. ${jettiesLine[i]}`);
      i++;
    }
  }
  return `The line is currently:${positionAndName}`; 
}
