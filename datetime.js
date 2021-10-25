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

const timeGivenPreCalltime = minutesToMilliseconds(15);
const timeGivenAfterWrap = minutesToMilliseconds(15);

const millisecondsInMinute = 60000; 
const millisecondsInHour = 3600000;

let lunchbreak = undefined;

//console.log("Calltime was: " + calltime);
const dayTypes = {
    CWD: "continuousWorkingDay",
    SCWD: "semiContinuousWorkingDay",
    SWD: "standardWorkingDay",
    REST: "restDay"
}

let typeOfDay = dayTypes.CWD

const day = {
    MONDAY: {
        DATE: new Date("2021-10-18"),
        BEGANWORK: new Date(2021, 9, 18, 8, 0, 0, 0),
        FINISHEDWORK: new Date(2021, 9, 18, 20, 0, 0, 0),
        CALLTIME: new Date(2021, 9, 18, 8, 0, 0, 0),
        WRAPTIME: new Date(2021, 9, 18, 19, 0, 0, 0),
        EXPECTEDWRAP: new Date(2021, 9, 18, 19, 0, 0, 0),
        DAYTYPE: dayTypes.SWD
    },
    TUESDAY: {
        DATE: new Date("2021-10-19"),
        BEGANWORK: new Date(2021, 9, 19, 20, 0, 0, 0),
        FINISHEDWORK: new Date(2021, 9, 19, 20, 0, 0, 0),
        CALLTIME: new Date(2021, 9, 19, 8, 0, 0, 0),
        WRAPTIME: new Date(2021, 9, 19, 19, 0, 0, 0),
        EXPECTEDWRAP: new Date(2021, 9, 19, 19, 0, 0, 0),
        DAYTYPE: dayTypes.CWD
    },
        WEDNESDAY: {
        DATE: new Date("2021-10-20"),
        BEGANWORK: new Date(2021, 9, 20, 8, 0, 0, 0),
        FINISHEDWORK: new Date(2021, 9, 20, 20, 0, 0, 0),
        CALLTIME: new Date(2021, 9, 20, 8, 0, 0, 0),
        WRAPTIME: new Date(2021, 9, 20, 19, 0, 0, 0),
        EXPECTEDWRAP: new Date(2021, 9, 20, 19, 0, 0, 0),
        DAYTYPE: dayTypes.SWD
    },
    THURSDAY: {
        DATE: new Date("2021-10-21"),
        BEGANWORK: new Date(2021, 9, 21, 8, 0, 0, 0),
        FINISHEDWORK: new Date(2021, 9, 21, 20, 0, 0, 0),
        CALLTIME: new Date(2021, 9, 21, 8, 0, 0, 0),
        WRAPTIME: new Date(2021, 9, 21, 19, 0, 0, 0),
        EXPECTEDWRAP: new Date(2021, 9, 21, 19, 0, 0, 0),
        DAYTYPE: dayTypes.SWD
    },
    FRIDAY: {
        DATE: new Date("2021-10-22"),
        BEGANWORK: new Date(2021, 9, 22, 8, 0, 0, 0),
        FINISHEDWORK: new Date(2021, 9, 22, 20, 0, 0, 0),
        CALLTIME: new Date(2021, 9, 22, 8, 0, 0, 0),
        WRAPTIME: new Date(2021, 9, 22, 19, 0, 0, 0),
        EXPECTEDWRAP: new Date(2021, 9, 22, 19, 0, 0, 0),
        DAYTYPE: dayTypes.SWD
    },
    SATURDAY: {
        DATE: new Date("2021-10-23"),
        BEGANWORK: undefined,
        FINISHEDWORK: undefined,
        CALLTIME: undefined,
        WRAPTIME: undefined,
        EXPECTEDWRAP: undefined,
        DAYTYPE: dayTypes.REST
    },
    SUNDAY: {
        DATE: new Date("2021-10-24"),
        BEGANWORK: undefined,
        FINISHEDWORK: undefined,
        CALLTIME: undefined,
        WRAPTIME: undefined,
        EXPECTEDWRAP: undefined,
        DAYTYPE: dayTypes.REST

    }
}
let dayWorked = day.MONDAY;
switch (typeOfDay) {
    case dayTypes.CWD: 
        lunchbreak = minutesToMilliseconds(0);
        console.log("Its a CWD")
        break
    case dayTypes.SCWD:
        lunchbreak = minutesToMilliseconds(30);
        console.log("Its a SCWD")
        break
    case dayTypes.SWD:
        lunchbreak = minutesToMilliseconds(60);    
        console.log("Its a SWD")
        break
    default:
        console.log("In the typeOfDay default")    
}




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
function calculateHoursWorked(dayWorked){
    
    let hoursWorked = 0;
    switch (dayWorked) {
        case day.MONDAY: 
            hoursWorked = day.MONDAY.FINISHEDWORK - day.MONDAY.BEGANWORK;
            console.log("Hours worked on Monday " + millisecondsToHours(hoursWorked)) + " hours";
            break;
        default:
            console.log("In the daysWorked default");    
    }
    return millisecondsToHours(hoursWorked);
}

function calculateHoursWorkedMinusGivenTime() {
    const hoursWorkedMinusGivenTime = finishedWork - beganWork - timeGivenAfterWrap - timeGivenPreCalltime - lunchbreak;
   
   
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

//console.log("Total hours worked was " + calculateHoursWorked());
//console.log("Total hours worked minus given time = " + calculateHoursWorkedMinusGivenTime());
/*
if(calculateHoursWorked() > calculateOnCameraHours()){
    console.log("Overtime may be due");
} else {
    console.log("Overtime not due");
}
*/
console.log("Precall was " + calculatePreCall(calltime) + " minutes");
//console.log("Monday started " + day.MONDAY.BEGANWORK + " and Monday day type " + day.MONDAY.DAYTYPE + "hours worked " + day.MONDAY.WORKEDHOURS);


console.log("Line 147: " + calculateHoursWorked(day.MONDAY));