// for creating a Date object
// const dateObj = new Date();

// Printing the date and time parts
// console.log(`Date: ${dateObj.toDateString()}`);
// console.log(`Time: ${dateObj.toTimeString()}`);




var strftime = require('strftime') 
/* The strftime() function is used to convert date and time objects to their string representation.
It takes one or more input of formatted code and returns the string representation.
Returns : It returns the string representation of the date or time object. */
var es_ES = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wedneday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    AM: 'AM',
    PM: 'PM',
    am: 'am',
    pm: 'pm',
}
    var strftimeES = strftime.localizeByIdentifier(es_ES)
     console.log(strftimeES('%a %B %d %Y %H:%M:%S'))