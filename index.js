var katzDeli = [];
function takeANumber(katzDeli,name){
 katzDeli.push(name);
 var number=katzDeli.indexOf(name)+1;
 return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeli){
  if (katzDeli.length>0){
    var customer =katzDeli[0];
    katzDeli.shift();
    return `Currently serving ${customer}.`;
   } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli){
  var empty=[];
    if( katzDeli.length>0){
       for (var i=0;i<katzDeli.length;i++){
       empty.push((i+1)+". " +katzDeli[i]);
       }
       return `The line is currently: ${empty.join(", ")}`;
     }else {
      return "The line is currently empty.";
    }
  }
