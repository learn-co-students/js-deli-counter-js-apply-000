function takeANumber(line,name){

line.push(name);
return (`Welcome, ${name}. You are number ${line.length} in line.`)


}

function nowServing(curLine){

  if(curLine.length === 0){
    return 'There is nobody waiting to be served!'
  } else {

    return `Currently serving ${curLine.shift()}.`
  }

}


function currentLine(curLine){

  if(curLine.length === 0 ){
    return "The line is currently empty."
  }
 var lineOfPeople = 'The line is currently: '

    for(let i = 0; i< curLine.length; i++){

      if(i === curLine.length - 1 ){ // need to minus 1 to get acurate number not array index

     lineOfPeople += `${i+1}. ${curLine[i]}`
  }
    else {

      lineOfPeople += `${i+1}. ${curLine[i]}, `

    }

}
return lineOfPeople

}
