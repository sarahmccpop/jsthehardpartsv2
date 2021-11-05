// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/javascript
function longest(s1, s2) {
    // remove duplicates from strings
    let s1Array = s1.toLowerCase().split('') 
    let s2Array = s2.toLowerCase().split('');
   s1Array.push(...s2Array);
  let uniq = [...new Set(s1Array)];

    return uniq.sort().join('');
  }
  console.log(longest("Sarah","Harry"));

  // passed codewars