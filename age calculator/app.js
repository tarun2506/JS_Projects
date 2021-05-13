let dateInput =  prompt('Enter you dob: ');  

let dob = new Date(dateInput);

let todayDate = new Date(Date.now());

let timeDiff = todayDate.getTime() - dob.getTime();

// Number of days:
const dateDiff = timeDiff / (1000*60*60*24);

// Number of years:
const years =  (dateDiff)/365;

// Number of remaining days:
const remainingDaysYear = (dateDiff.toFixed(0))%365;

// Number of months passed:
const monthsPassed = remainingDaysYear/30;

// Number of days remaining in a month:
const remainingDaysMonth = remainingDaysYear%30;


alert(`You are ${remainingDaysMonth.toFixed(0)} days, ${monthsPassed.toFixed(0)-1} months and ${Math.floor(years)} yrs old.`)


