function takeANumber(laLineaDeKatz, nombre) {
  laLineaDeKatz.push(nombre);
  return `Welcome, ${nombre}. You are number ${laLineaDeKatz.length} in line.`;
}

function nowServing(laLineaDeKatz) {
  if (laLineaDeKatz.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${laLineaDeKatz.shift()}.`;
  }
}

function currentLine(laLineaDeKatz) {
  if (laLineaDeKatz.length < 1) {
    return "The line is currently empty.";
  }
  else {
    var laLinea = "The line is currently:";
    for (var i = 0; i < (laLineaDeKatz.length-1); i++) {
      laLinea = laLinea + " " + (i+1) + ". " + laLineaDeKatz[i] + ",";
    }
    laLinea = laLinea + " " + (i+1) + ". " + laLineaDeKatz[i];
    return laLinea;
  }
}
