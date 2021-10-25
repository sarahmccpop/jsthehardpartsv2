
const d = new Date();
const calltime = new Date(2021, 9, 25, 8, 0, 0, 0);
const wrap = new Date(2021,9, 25, 19, 0, 0, 0 )
const beganWork = new Date(2021, 9, 25, 7, 30, 0, 0);
const finishedWork = new Date(2021, 9, 25, 20, 0, 0, 0);



const millisecsInMinute = 60000; 
console.log("Date is " + d);
console.log("Calltime was: " + calltime);
const justDate = new Date();
console.log("Just date " + justDate.getDate());

function millisecondsToMinutes(milliseconds){
    minutes = milliseconds / millisecsInMinute;
    return minutes;
}

function millisecondsToHours(milliseconds){
    hours = milliseconds / 3600000;
    return hours;
}

function calculateHoursWorked(){
    const hoursWorked = finishedWork - beganWork;
    return hoursWorked;
}

function calculateOnCameraHours(){
    const onCameraTime = wrap - calltime;
    return onCameraTime;
}

function calculatePreCall(calltime){
    
    //console.log("Given time " + givenTime);
    let preCall = calltime - beganWork;
    preCall = millisecondsToMinutes(preCall);
    return preCall;
}

console.log("Hours worked was " + millisecondsToHours(calculateHoursWorked()));

if(millisecondsToHours(calculateHoursWorked()) > millisecondsToHours(calculateOnCameraHours())){
    console.log("Overtime may be due");
}

console.log("Precall was " + calculatePreCall(calltime) + " minutes");
