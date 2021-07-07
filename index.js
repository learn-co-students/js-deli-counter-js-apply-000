var katzDeli=[];

function takeANumber(katzDeli,name){
  katzDeli.push(name);
  var number=katzDeli.indexOf(name);
  number+=1;
  return 'Welcome, '+name+'. You are number '+number+' in line.';
}

function nowServing(line){
  if (line.length==0){
    return 'There is nobody waiting to be served!';
  }
  else {
    var b=line.shift();
    return 'Currently serving '+b+'.';
  }
}

function currentLine(line){
  if (line.length==0){
    return 'The line is currently empty.';
  } else{
    var i;
    var str='';
    for (i=0;i<line.length;i++){
      var n=i+1;
      str+=n+'. '+line[i]+', ';
    }
    str=str.slice(0,-2);
    return 'The line is currently: '+str;
  }
}
