// Code your solution in this file!
//returning an array of the first two drivers from the passed-in array
const drivers = ['Antonia', 'Nuru' , 'Amari' , 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 function createFareMultiplier(multiplier){
    return function(fare){
        return fare *multiplier;
    };
 }
 function fareDoubler(fare){
    return fare *2;
 }
 function fareTripler(fare){
    return fare *3;
 }
 function selectDifferentDrivers(arrayOfDrivers, selectFunction){
    return selectFunction(arrayOfDrivers);
 }