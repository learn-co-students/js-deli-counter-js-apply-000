function takeANumber(arr,name){
  arr[arr.length] = name;
  return "Welcome, "+name+"."+" You are number "+arr.length.toString()+" in line."
}

function nowServing(arr){
  if(arr.length==0){
    return "There is nobody waiting to be served!";
  }else{
  
    return "Currently serving "+arr.shift()+".";
  }
}

function currentLine(arr){
  if(arr.length==0){
    return "The line is currently empty.";
  }else{
    var str="The line is currently: ";
    var index;
    var length=arr.length;
    for(index=0;index<length;index++){
      if(index==length-1){
        str+=(index+1).toString();
        str+=". ";
        str+=arr[index];
      }else{
        str+=(index+1).toString();
        str+=". ";
        str+=arr[index];
        str+=", ";
      }
    }
    return str;
    
  }
}