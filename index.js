function takeANumber(deliLine,customerName){
  deliLine.push(customerName);
  let numberInLine = deliLine.indexOf(customerName)+1;
  let welcomeMsg = `Welcome, ${customerName}. You are number ${numberInLine} in line.`
  return welcomeMsg;
  // problem with function is how should I display what number a new person is in line, I have top know how many people are in line when they are being added
}


function nowServing(deliLine){
  if (deliLine.length>0){
    let currentCustomer = deliLine[0];
    deliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
  else{
    return "There is nobody waiting to be served!";
  }
  // function ahould return the first person in line and then remove that individual from the line. If there is no one in line it should return, "There is nobody waiting in line"
}

function currentLine(deliLine){
  if (deliLine.length<1){
    return "The line is currently empty.";
  }
  else{
    let lineStatus = "The line is currently:";
    for (let i=0;i<deliLine.length;i++){
      lineStatus += ` ${i+1}. ${deliLine[i]},`;
    }
    let finalLineStatus = lineStatus.slice(0,lineStatus.length-1);
    return finalLineStatus;
  }
  
  //function should return the contents of the array deliLine in the form of "The line is currently: 1.person,2.person,3.person"
}