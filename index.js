// function takeANumber(katzDeliLine, name){
//    katzDeliLine.push(name);
//    let num = katzDeliLine.length;
//    return `'Welcome, ${name}. You are number ${num} in line.'`;
//
// }

function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name);
   let num = katzDeliLine.length;
   return "Welcome, " + name + ". You are number " + num + " in line.";

}

function nowServing {
  if(katzDeliLine.length !== 0){
    return katzDeliLine.unshift();
  } else {
    return "There is nobody waiting to be served!"
  }
}
