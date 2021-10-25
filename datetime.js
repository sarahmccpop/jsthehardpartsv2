

const calltime = new Date(2021, 9, 25, 8, 0, 0, 0);
const wrap = new Date(2021,9, 25, 19, 0, 0, 0 );
const beganWork = new Date(2021, 9, 25, 7, 30, 0, 0);
const finishedWork = new Date(2021, 9, 25, 20, 0, 0, 0);
const expectedWrap = new Date(2021,9, 25, 19, 0, 0, 0 );

const timeGivenPreCalltime = minutesToMilliseconds(15);
const timeGivenAfterWrap = minutesToMilliseconds(15);

const millisecsInMinute = 60000; 
const millisecsInHour = 3600000;

console.log("Calltime was: " + calltime);

// this converts milliseconds to minutes
function millisecondsToMinutes(milliseconds){
    minutes = milliseconds / millisecsInMinute;
    return minutes;
}

// this converts milliseconds to hours
function millisecondsToHours(milliseconds){
    hours = milliseconds / millisecsInHour;
    return hours;
}

// this converts minutes to milliseconds
function minutesToMilliseconds(minutes){
    let milliseconds = minutes * 60000;
    return milliseconds;
}

function calculateHoursWorked(){
    const hoursWorked = finishedWork - beganWork;
    return hoursWorked;
}

function calculateHoursWorkedMinusGivenTime() {
    const hoursWorkedMinusGivenTime = finishedWork - beganWork - timeGivenAfterWrap - timeGivenPreCalltime;
    return hoursWorkedMinusGivenTime;
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

console.log("Total hours worked was " + millisecondsToHours(calculateHoursWorked()));
console.log("Total hours minus given time = " + millisecondsToHours(calculateHoursWorkedMinusGivenTime()));

if(millisecondsToHours(calculateHoursWorked()) > millisecondsToHours(calculateOnCameraHours())){
    console.log("Overtime may be due");
}

console.log("Precall was " + calculatePreCall(calltime) + " minutes");
