const takeANumber = (line , name)=>{
line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`
};

const nowServing = (line) =>{
  if (line.length===0)
  return `There is nobody waiting to be served!`
else
  return `Currently serving ${line.shift()}.`
};



const currentLine = (line) =>{
if (line.length ===0){
  return `The line is currently empty.`;
}

let position =[];
for (let i=0; i<line.length; i++){
  position.push(i+1 + ". "+line[i])
}
return "The line is currently: " + position.join(', ');


};
