var pos=0;
//var katzDeli = [];
function takeANumber(katzDeliLine, name){
  var pos = katzDeliLine.length;
  katzDeliLine[pos] = name;
  var newpos = pos + 1;
  var str = 'Welcome, '+name+'. You are number '+newpos+' in line.';
  //katzDeli[pos] = str;
  return str;
}
var pos = 0
function nowServing(katzDeliLine, name){
  if(katzDeliLine.length<=0){
    return 'There is nobody waiting to be served!';
  }else{
    var pos = katzDeliLine.length;
    //alert(pos);
    katzDeliLine[pos] = name;
    //var np = katzDeliLine[pos];
    var str = 'Currently serving '+name;
    return str;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length<=0){
    return 'The line is currently empty.'
  } else{
    var line = 'The line is currently: '
    var nl='';
    var j=1;
    var k=1;
    var ml='';
    for(var i=0;i<katzDeliLine.length;i++){
      nl =nl+ j+'. '+katzDeliLine[i];
      if(k<katzDeliLine.length){
        nl = nl+', ';
        k++;
      }
      j++;
    }
    var fl = line+nl;
    return fl;
  }
}
