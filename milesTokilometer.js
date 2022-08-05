function milesToKilometer (miles){
const kilometer = miles * 1.60934 ;
return kilometer;
}

const miles = 2;
const kilometer = milesToKilometer(miles);
console.log('kilometer:', kilometer);
