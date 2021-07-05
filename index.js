//I'll have what she's having.

function takeANumber(array, name){
  array.push(name);
  return `Welcome, `+ name+`. You are number `+(array.length)+` in line.`
}

function nowServing(array){
  if (array.length===0){
    return `There is nobody waiting to be served!`
  }
    else {
      return `Currently serving `+ array.shift()+`.`
    }
}

function currentLine(array){
  if (array.length===0){
    return `The line is currently empty.`}
    else {
      var string = `The line is currently: `
      for (let i = 0; i < array.length; i++){
        if (i===array.length-1){
          string = string.concat((i+1)+`. `+array[i])
        }
        else {
          string = string.concat((i+1)+`. `+array[i]+`, `)
        }
      }
    return string
    }
}

//This is where you test the functions
//takeaNumber
var katz = []
console.log(
takeANumber(katz,"Harry"))
console.log(
takeANumber(katz,"Sally"))
console.log(
takeANumber(katz,"Carrie Fisher"))
//console.log(nowServing(katz))
//console.log(katz)
//console.log(nowServing(katz))
//console.log(katz)
console.log(currentLine(katz))