function takeANumber( line, customer) {
  line.push( customer );
  return `Welcome, ${customer}. You are number ${line.length} in line.`
}

function nowServing ( line ) {
  if ( line.length > 0 ) {
    var serving = line.shift();
    return `Currently serving ${serving}.`
  }
  return `There is nobody waiting to be served!`
}

function currentLine( line ) {
  var result = "The line is currently";
  if ( line.length === 0 ) return result+" empty.";
  result += ": ";
  for ( var i = 0; i < line.length - 1; i++ ) { 
    result += `${ i + 1 }. ${ line[ i ] }, `;
  }
  result += `${ i + 1 }. ${ line[ line.length - 1 ] }`;
  return result;
}