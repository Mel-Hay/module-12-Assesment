// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let realAlphabet =[
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result=[];
    let codedNum=[];
    input = input.toLowerCase()
      if(!alphabet||alphabet.length!==26){
      return false
    }
    //console.log(alphabet)
    
    alphabet=alphabet.split('') 
    let quantityCheck=[]
   for(let i=0;i<alphabet.length;i++){     
      let tempLetter=alphabet[i]
      if(quantityCheck.includes(tempLetter)){
        return false
      }else{
        quantityCheck.push(tempLetter)
      }
    }
   if(encode){
     for(let i=0;i<input.length;i++){
         if(input[i]=== " "){
           codedNum.push(" ")}//issue here
       realAlphabet.forEach((letter)=>{
         if(input[i]===letter){
           codedNum.push(realAlphabet.indexOf(letter))
         }  
       })       
     }
       codedNum.forEach((indexNum)=>{
          // console.log(indexNum)
         if(indexNum===" "){
           result.push(" ")
         }else{
           result.push(alphabet[indexNum])
         }         
         })
       return(result.join(''))
   }else{
      for(let i=0;i<input.length;i++){
         if(input[i]=== " "){
           codedNum.push(" ")}//issue here
       alphabet.forEach((letter)=>{
         if(input[i]===letter){
           codedNum.push(alphabet.indexOf(letter))
         }  
       })       
     }
       codedNum.forEach((indexNum)=>{
          // console.log(indexNum)
         if(indexNum===" "){
           result.push(" ")
         }else{
           result.push(realAlphabet[indexNum])
         }         
         })
       return(result.join(''))
   }
   }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
