// function isleapYear(year){
// const leapyear = year%4;
// if(leapyear==0){
// console.log('This year is leapyear', year)
// }
// else{
// console.log('This year not leapyear', year)
// }

// }
// const year1 = isleapYear(2000);
// const year2 = isleapYear(1999);
// const year3 = isleapYear(1998);
// const year4 = isleapYear(1966);

// create return 

function isleapYear(year){
const leapyear = year%4;
if(leapyear==0){
return true;
}
else{
return false;
}

}
const year1 = isleapYear(2000);
console.log('This year to be leapyear:',year1)
const year2 = isleapYear(1999);
console.log('This year to be leapyear:',year2)
