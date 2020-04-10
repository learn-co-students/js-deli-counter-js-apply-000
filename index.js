function takeANumber(array,name){
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
};

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    let firstPerson= katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }else {
    return "There is nobody waiting to be served!";
  };
};

function currentLine(array){
 if(array.length>0){
    let newArray= [];
    let newDeliLine=[];

    for (let i=0; i<array.length; i++){
        let number= i+1;
        newArray.push(number);
      }

    for(let i=0; i<array.length; i++){
     let number=`${ newArray[i] }. ${array[i]}`
      newDeliLine.push(number)
    }
     let announce= newDeliLine.join(", ")
  return "The line is currently: " + `${announce}`
  }else{
    return "The line is currently empty.";
  }
}
