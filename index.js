var takeANumber=function(para1,para2){
  var para1Len=para1.length
  if(!para1.includes(para2)){
    para1.push(para2)
  }
  return `Welcome, ${para2}. You are number ${para1Len+1} in line.`
}

var nowServing=function(para1){
  if(para1.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var firstInLine=para1[0]
    para1.shift()
    return `Currently serving ${firstInLine}.`
  }
}

var currentLine=function(para1){
  if(para1.length===0){
    return "The line is currently empty."
  }
  var emptyArray=[]
  for(var i=0;i<para1.length;i++){
    emptyArray.push(` ${i+1}. ${para1[i]}`)
  }
  return 'The line is currently:'+emptyArray.join()
}