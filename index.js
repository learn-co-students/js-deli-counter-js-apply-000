var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name)
  var a = katzDeli.length;
  var c = "Welcome, " + name + ". You are number " + a + " in line."
  return c
}

function nowServing(katzDeli){

  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }

  else if (katzDeli.length >= 1){
    var firstCustomer = katzDeli[0]
    katzDeli.shift()
    /*var empty = []
    for (var i = 0; var i < katzDeli.length){

    }*/
    return "Currently serving " + firstCustomer + "."
  }

}


function currentLine(katzDeli){

  if (katzDeli.length === 0){
    return "The line is currently empty."
  }

  else if (katzDeli.length >= 1){
    var firstCustomer = katzDeli[0]
    var empty = []
    for (var i = 0; i < katzDeli.length; i++ ){
      var j = parseInt(i + 1)
      empty[i] = " " + j + ". " + katzDeli[i]
    }
    katzDeli.shift()

    return "The line is currently:" + empty
  }

}
