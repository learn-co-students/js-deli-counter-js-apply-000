function takeANumber(arr, name) {
  arr[arr.length] = `${name}`
  return `Welcome, ${name}. You are number ${arr.length} in line.`
}

function nowServing(arr) {
  if(arr.length == 0) {
    return "There is nobody waiting to be served!"
  }
  var str = `Currently serving ${arr[0]}.`
  arr.shift()
  return str
}

function currentLine(arr) {
  if(arr.length == 0) {
    return "The line is currently empty."
  }
  var str = "The line is currently: "
  for (var i = 0; i < arr.length; i++) {
    if(i == arr.length - 1) {
      str = str + `${i+1}. ${arr[i]}`
    }
    else {
      str = str + `${i+1}. ${arr[i]}, `
    }
  }
  return str
}
