const polybiusModule = (function () {
  let alphabet={
    'a':11,
    'b':21,
    'c':31,
    'd':41,
    'e':51,
    'f':12,
    'g':22,
    'h':32,
    'i':42,
    'j':42,
    'k':52,
    'l':13,
    'm':23,
    'n':33,
    'o':43,
    'p':53,
    'q':14,
    'r':24,
    's':34,
    't':44,
    'u':54,
    'v':15,
    'w':25,
    'x':35,
    'y':45,
    'z':55,
 };
  let encodedAlphabet={
    '11':'a',
    '21':'b',
    '31':'c',
    '41':'d',
    '51':'e',
    '12':'f',
    '22':'g',
    '32':'h',
    '42':'j/i',
    '52':'k',
    '13':'l',
    '23':'m',
    '33':'n',
    '43':'o',
    '53':'p',
    '14':'q',
    '24':'r',
    '34':'s',
    '44':'t',
    '54':'u',
    '15':'v',
    '25':'w',
    '35':'x',
    '45':'y',
    '55':'z'
  }  
  function polybius(input, encode = true) {
 
    let result=''
 
    
    if (encode) {
    input=input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
    let character = input[i];
    if (character === ' ') {
      result += ' ';
      continue;
    }
      result += alphabet[character];
    } 
    }else {
    //I need to convert the input from numbers back to letters.
    //First step is to put guard clause for odd length of numbers
    let inputArray=[];
    let checkArray=[];
      for(let i=0;i<input.length;i++){
        if(input[i]!==" "){
          checkArray.push(input[i])
        } 
      }
      if(checkArray.length%2 !==0){
        return false
      }
      //Then split the numbers up into increments of two
      //Take into account spaces
      for(let i=0;i<input.length;i++){
          inputArray.push(input[i])          
      }
      splitArray=[]//job is to hold the numbers in increments of two and the spaces alone
      //need to do spaces still
      //console.log(inputArray)
       for(let i=0;i<input.length;i+=2){
          if(inputArray[i]!==" "){
            splitArray.push(inputArray[i]+inputArray[i+1])
          }else{
            splitArray.push(" ")
            i-=1
          }
      }     
      //Find the correlating letter for the given number
      console.log(splitArray)
      splitArray.forEach((num)=>{
        if(num!==" "){
         result+=encodedAlphabet[num]
        }else{
          result +=" "
        }
      })
    }
  return result;
}
      
     

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
