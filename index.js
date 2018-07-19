var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(Deli, name){
  Deli.push(name);
  return `Welcome, ${name}. You are number ${Deli.length} in line.`;
}

const deliLine = ["Steven", "Blake", "Avi"];

function nowServing (Deli){
  if(Deli.length>0){
    return `Currently serving ${Deli.shift()}.`;
  } else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  var numbers = [];
  var n = 0;
  if(line.length>0){
  while (n<line.length){
    n = n+1;
    numbers.push(n);
  }
  var newLine = [];
  for (let i=0; i<line.length; i++){
    newLine.push(` ${numbers[i]}. ${line[i]}`);
    
  }
    return `The line is currently: ${newLine}`;
  } else {
    return "The line is currently empty.";
  }
}





  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})