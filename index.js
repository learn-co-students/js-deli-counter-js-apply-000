let katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

//why does the below actually shift that first element in addition to just return the string?
function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return (`There is nobody waiting to be served!`)
  }
  return (`Currently serving ${katzDeli.shift()}.`)
}


function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return (`The line is currently empty.`)
  }
  let introText = (`The line is currently: `);
  for (let i = 0; i < katzDeli.length; i++){
    //here i'm trying to concatenate my 'introText' string, and a string naming the place in line plus the person at that array index
    introText += `${[i + 1]}. ${katzDeli[i]}`;
    if (i + 1 != katzDeli.length){
      introText += `, `
    }
  }
return introText
}
