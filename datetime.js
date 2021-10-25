/*import { formatDistance, subDays } from 'date-fns'
import { format, compareAsc } from 'date-fns'

const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30
  }) 

console.log(result);*/
const beganWork = new Date(2021, 9, 25, 7, 30, 0, 0);
const finishedWork = new Date(2021, 9, 25, 20, 0, 0, 0);
const calltime = new Date(2021, 9, 25, 8, 0, 0, 0);
const wrap = new Date(2021,9, 25, 19, 0, 0, 0 );
const expectedWrap = new Date(2021,9, 25, 19, 0, 0, 0 );

const dayTypes = {
    CWD: "continuousWorkingDay",
    SCWD: "semiContinuousWorkingDay",
    SWD: "standardWorkingDay",
}

let lunchbreak = undefined;
let typeOfDay = dayTypes.SWD;
switch (typeOfDay) {
    case dayTypes.CWD:
        lunchbreak = minutesToMilliseconds(0);
    case dayTypes.SCWD:
        lunchbreak = minutesToMilliseconds(30);
    case dayTypes.SWD:
        lunchbreak = minutesToMilliseconds(60);    
}

const timeGivenPreCalltime = minutesToMilliseconds(15);
const timeGivenAfterWrap = minutesToMilliseconds(15);

const millisecondsInMinute = 60000; 
const millisecondsInHour = 3600000;

console.log("Calltime was: " + calltime);

// this converts milliseconds to minutes
function millisecondsToMinutes(milliseconds){
    minutes = milliseconds / millisecondsInMinute;
    return minutes;
}

// this converts milliseconds to hours
function millisecondsToHours(milliseconds){
    hours = milliseconds / millisecondsInHour;
    return hours;
}

// this converts minutes to milliseconds
function minutesToMilliseconds(minutes){
    let milliseconds = minutes * 60000;
    return milliseconds;
}

// this calculates the hours worked
function calculateHoursWorked(){
    const hoursWorked = finishedWork - beganWork - lunchbreak;
    return millisecondsToHours(hoursWorked);
}

function calculateHoursWorkedMinusGivenTime() {
    const hoursWorkedMinusGivenTime = finishedWork - beganWork - timeGivenAfterWrap - timeGivenPreCalltime;
    return millisecondsToHours(hoursWorkedMinusGivenTime);
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

console.log("Total hours worked was " + calculateHoursWorked());
console.log("Total hours minus given time = " + calculateHoursWorkedMinusGivenTime());

if(calculateHoursWorked() > calculateOnCameraHours()){
    console.log("Overtime may be due");
} else {
    console.log("Overtime not due");
}

console.log("Precall was " + calculatePreCall(calltime) + " minutes");
