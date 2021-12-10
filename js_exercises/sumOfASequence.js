//https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
function sequenceSum(begin, end, step){
    let returnedValue = 0;
    if (begin > end){
        returnedValue = 0;
    } else {
        for (let i = begin; i <= end; i+=step){
            returnedValue+=i;
        }
    }
    return returnedValue;
  };
 
function sequenceSum2(begin, end, step){  
    let returnedValue = 0;
    if (begin < end){
      for (let i = begin; i <= end; i+=step){
          returnedValue+=i;
      }
    }

    return returnedValue;
};

function summedSequence(begin, end, step) {
  let total = 0;
  for (let i = begin; i <= end; i+=step){
      total+=i;
  }

  return total
}

function sequenceSum3(begin, end, step){
  return begin > end ? 0 : summedSequence(begin, end, step);
};



  console.log(sequenceSum2(2, 6, 2));
  console.log(sequenceSum2(1, 5, 1));
  console.log(sequenceSum3(2, 6, 2));
  console.log(sequenceSum3(1, 5, 1));

