const d = new Date();
const calltime = new Date(2021, 9, 25, 8, 0, 0, 0);
const millisecsInMinute = 60000; 
console.log("Date is " + d);
console.log("Calltime was: " + calltime);

function millisecondsToMinutes(milliseconds){
    minutes = milliseconds / millisecsInMinute;
    return minutes;
}

function calculatePreCall(calltime){
    const beganWork = new Date(2021, 9, 25, 7, 30, 0, 0);
    //console.log("Given time " + givenTime);
    let preCall = calltime - beganWork;
    preCall = millisecondsToMinutes(preCall);
    return preCall;
}


console.log("Precall was " + calculatePreCall(calltime) + " minutes");