var katzDeliLine = [];

function takeANumber( array, name ) {
  array.push( name )
  return `Welcome, ${name}. You are number ${array.length} in line.`
}
function nowServing( array ) {
  if ( array.length === 0 ) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${array.shift()}.`
  }
}
function currentLine( array ) {
  if ( array.length === 0 ) {
    return 'The line is currently empty.'
  } else {
    var string = ""
    for (var i = 0; i < array.length; i++) {
      string += `${i+1}. ${array[i]}`
      if ( i < array.length - 1 ) {
        string += ", "
      }
    }
    return `The line is currently: ${string}`
  }
}