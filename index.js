// describe('deli', () => {
//   describe('takeANumber', () => {
//     var katzDeli;
//     var otherDeli;

//     beforeEach(() => {
//       katzDeli = [];
//       otherDeli = ["Steven", "Blake", "Avi"];
//     });

//     it('adds a person to the line', () => {
//       expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, Ada. You are number 1 in line.");
//       expect(katzDeli).toEqual(['Ada']);
//     });

//     it('appends the person the end of the line if there are already people on it', () => {
//       expect(takeANumber(otherDeli, 'Grace')).toEqual("Welcome, Grace. You are number 4 in line.");
//       expect(otherDeli).toEqual(["Steven", "Blake", "Avi", "Grace"]);
//     });

//     it("properly handles multiple people being added", () => {
//       takeANumber(katzDeli, 'Ada');
//       takeANumber(katzDeli, 'Grace');
//       takeANumber(katzDeli, 'Kent');

//       expect(katzDeli).toEqual(["Ada", "Grace", "Kent"]);
//     });
//   });

const takeANumber = (deli,string) => {
  deli.push(string);
  return `Welcome, ${string}. You are number ${deli.indexOf(string) + 1} in line.`
}

//   describe('nowServing', () => {
//     it('returns the line is empty when no one is on line', () => {
//       expect(nowServing([])).toEqual("There is nobody waiting to be served!");
//     });

//     it('returns an announcement about the person it is serving, and shifts the line', () => {
//       const deliLine = ["Steven", "Blake", "Avi"]
//       expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
//       expect(deliLine).toEqual(["Blake", "Avi"]);
//     });
//   });

const nowServing = arr => {
  if (arr.length === 0) return "There is nobody waiting to be served!";
  return `Currently serving ${arr.shift()}.`
}

//   describe('currentLine(line)', () => {
//     it('returns "The line is currently empty." if no one is in line', () => {
//       expect(currentLine([])).toEqual("The line is currently empty.");
//     });

//     it('says who is in line when there are people waiting', () => {
//       expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
//     });
//   });
// })

const currentLine = line => {
  if (line.length === 0) return "The line is currently empty.";
  let arr = line.map((person,index)=> `${index+1}. ${person}`)
  return `The line is currently: ` + arr.join(", ")
}
