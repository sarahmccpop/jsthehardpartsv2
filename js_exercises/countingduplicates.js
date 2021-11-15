// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

function duplicateCount(text){
    // loop through each letter in string
    // increment counter every time a duplicate or multiple is found 
    // return the counter 
   text = text.toLowerCase(); 
   let counter = 0;
   let duplicateFound = false;
    for (let i = 0; i < text.length; i++){
        if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])){
            duplicateFound = true;
        }

    }
    return counter;
    
  }
  console.log(duplicateCount("aAbbcde"));