function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  var newArr = [];
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    newArr.push(`Currently serving ${katzDeliLine[0]}.`);
    katzDeliLine.shift();
  }
  return newArr;
}

function currentLine(line){
  var newArr = []
  if(line.length === 0){
  return "The line is currently empty."
  } else {
    for(var i = 0; i<line.length; i++){
    var sentence = "The line is currently:"
    newArr.push(` ${1+i}. ${line[i]}`)
    }
  }
  return sentence + newArr
}
/*
  describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})

*/