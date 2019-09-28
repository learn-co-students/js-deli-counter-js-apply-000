var takeANumber=function(para1,para2){
  // assign variable to length of para1 array
  var para1Len=para1.length
  
  // check if para2 element is in para1 array using includes method
  if(!para1.includes(para2)){
    
    // append para2 elment to para1 array using push method
    para1.push(para2)
  }
  
  //return a string
  return `Welcome, ${para2}. You are number ${para1Len+1} in line.`
}

var nowServing=function(para1){
  // special case whem para1 array is empty
  if(para1.length===0){
    return "There is nobody waiting to be served!"
  }
  
  // when para1 array is not empty
  else{
    
    // assign variable to first element of para1 array
    var firstInLine=para1[0]
    
    // remove the element at the beginning of para1 array using shift method
    para1.shift()
    
    // return a string
    return `Currently serving ${firstInLine}.`
  }
}

var currentLine=function(para1){
  // special case whem para1 array is empty
  if(para1.length===0){
    return "The line is currently empty."
  }
  
  // create emptyArray variable
  var emptyArray=[]
  
  // loop through para1 array
  for(var i=0;i<para1.length;i++){
    
    // append string to emptyArray using push method
    emptyArray.push(` ${i+1}. ${para1[i]}`)
  }
  
  // join all elements of emptyArray and return a string
  return 'The line is currently:'+emptyArray.join()
}