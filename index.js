function takeANumber(arr,name){
  arr.push(name);
  const index = arr.indexOf(name);
  return `Welcome, ${name}. You are number ${index + 1} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    const firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else{
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(arr){
  const newArr = ["The line is currently:"];
  if(arr.length > 0){
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== arr[arr.length -1]){
            newArr.push(`${[i+1]}. ${arr[i]},`); //push with comma
        }else{
        newArr.push(`${[i+1]}. ${arr[i]}`) //push without comma
        }
      }
  } else {
    return `The line is currently empty.`;
  }
  return newArr.join(" ");
}