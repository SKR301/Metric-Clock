const daysTillGenesis = 719529;   //days passed till 1/1/1971
const msInADay = 86400000;
const msInHr = 3600000;
const msInMint = 60000;
const msInSec = 1000;
const conversionRatio = 0.864;

// ------------ HELPER FUNCTIONS
// add padding before
const addPadding = (value, padCheck) => {
    var valLength = value.toString().length;
    if(valLength <= padCheck) {
        return '0'.repeat(padCheck - valLength) + value;
    }
}
// check input date format m[dd-m-yyyy] or n[dd-mm-yyyy]
const checkInputDateFormat = (date, system) => {
    const element = date.split('-');

    if(system == 'm'){
        if(!date.match(/[0-9]{2}-[0-9]{1}-[0-9]{4}/)){
            return false;
        } else {
            if(Number(element[0]) > 99){
                return false;
            }
            if(Number(element[1]) > 9){
                return false;
            }
            if(Number(element[2]) > 9999){
                return false;
            }
        }
    }
    if(system == 'n'){
        if(!date.match(/[0-9]{2}-[0-9]{2}-[0-9]{4}/)){
            return false;
        } else {
            if(Number(element[0]) > 31){
                return false;
            }
            if(Number(element[1]) > 12){
                return false;
            }
            if(Number(element[2]) > 9999){
                return false;
            }
        }
    }
    
    return true;
}
// check input time format m[h-mm-ss] or n[hh-mm-ss]
const checkInputTimeFormat = (time, system) => {
    const element = time.split(':');
    if(system == 'm'){
        if(!time.match(/[0-9]{1}:[0-9]{2}:[0-9]{2}/)){
            return false;
        } else {
            if((element[0]) > 9){
                return false;
            }
            if((element[1]) > 99){
                return false;
            }
            if((element[2]) > 99){
                return false;
            }
        }
    }
    if(system == 'n'){
        if(!time.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)){
            return false;
        } else {
            if((element[0]) > 23){
                return false;
            }
            if((element[1]) > 59){
                return false;
            }
            if((element[2]) > 59){
                return false;
            }
        }
    }
    
    return true;
}

// ------------ MAIN FUCNTIONS
// display current matrix time
const now = (format = 'Time: %Hh:%Mm:%Ss\nDate: %dd-%mm-%yy') => {
    const dateTime = new Date();

    const daysAfterGenesis = Math.floor(dateTime.getTime() / msInADay);
    const msPassedToday = dateTime.getHours() * msInHr + dateTime.getMinutes() * msInMint + dateTime.getSeconds() * msInSec + dateTime.getMilliseconds();

    const daysPassed = daysAfterGenesis + daysTillGenesis;
    const msPassedTodayMetrics = msPassedToday / conversionRatio;

    var mYear = Math.floor(daysPassed / 1000);
    var mMonth = Math.floor((daysPassed - mYear * 1000) / 100);
    var mDay = Math.floor(daysPassed - (mYear * 1000) - (mMonth * 100));

    var mHour = Math.floor(msPassedTodayMetrics / 10000000);
    var mMin = Math.floor((msPassedTodayMetrics - (mHour * 10000000)) / 100000);
    var mSec = Math.floor((msPassedTodayMetrics - (mHour * 10000000) - (mMin * 100000)) / 1000);

    mYear = addPadding(mYear,4);mMonth = addPadding(mMonth,1);mDay = addPadding(mDay,2);
    mHour = addPadding(mHour,1);mMin = addPadding(mMin,2);mSec = addPadding(mSec,2);

    const output = format.replaceAll('%H',mHour).replaceAll('%M',mMin).replaceAll('%S',mSec).replaceAll('%d',mDay).replaceAll('%m',mMonth).replaceAll('%y',mYear);
    
    return output;
}
// add mints to time
const addTime = (mint, time) => {
    (time == undefined)?time = now('%H:%M:%S'): time = time;
    mint = Number(mint);
    
    var output = null;
    var element;
    if(checkInputTimeFormat(time,'m')){
        element = time.split(':');
        var initialTime = Math.floor(Number(time.split(':').join(''))/100);
        var outputTime = initialTime + mint;

        var newSec = (element[2]);
        var newMint = (outputTime % 100);
        var newHr = (Math.floor(outputTime / 100)) % 10;
        
        output = addPadding(newHr,1)+':'+addPadding(newMint,2)+':'+addPadding(newSec,2);
    }
    return output;
}
// add days to date 
const addDate = (day, date) => {
    (date == undefined)?date = now('%d-%m-%y'): date = date;
    day = Number(day);
    
    var output = null;
    var element;
    if(checkInputDateFormat(date,'m')){
        element = date.split('-');
        var initialDate = Math.floor(Number(date.split('-').reverse().join('')));
        var outputDate = initialDate + day;

        var newDay = (outputDate % 100);
        var newMonth = Math.floor(( (outputDate % 1000) - newDay) / 100);
        var newYear = Math.floor(outputDate / 1000) % 10000;
        
        output = addPadding(newDay,2)+'-'+addPadding(newMonth,1)+'-'+addPadding(newYear,4);
    }
    return output;
}
// subtract mints from time 
const subTime = (mint, time) => {
    (time == undefined)?time = now('%H:%M:%S'): time = time;
    mint = Number(mint);
    
    var output = null;
    var element;
    if(checkInputTimeFormat(time,'m')){
        element = time.split(':');
        var initialTime = Math.floor(Number(time.split(':').join(''))/100);
        var outputTime = initialTime - mint;
        var newSec = (element[2]);
        var newMint = ((outputTime % 100) + 100) % 100;
        var newHr = (((Math.floor(outputTime / 100)) % 10) + 10) % 10;
        
        output = addPadding(newHr,1)+':'+addPadding(newMint,2)+':'+addPadding(newSec,2);
    }
    return output;
}
// subtract days from date 
const subDate = (day, date) => {
    (date == undefined)?date = now('%d-%m-%y'): date = date;
    day = Number(day);
    
    var output = null;
    var element;
    if(checkInputDateFormat(date,'m')){
        element = date.split('-');
        var initialDate = Math.floor(Number(date.split('-').reverse().join('')));
        var outputDate = initialDate - day;
        var newDay = ((outputDate % 100)+100)%100;
        var newMonth = ((((outputDate % 1000) - newDay) / 100)+10)%10;
        var newYear = ((Math.floor(outputDate / 1000)) + 10000) % 10000;
        
        output = addPadding(newDay,2)+'-'+addPadding(newMonth,1)+'-'+addPadding(newYear,4);
    }
    return output;
}
// convert metric time to normal
const m2nTime = (time) => {
    var output = null;
    if(checkInputTimeFormat(time,'m')){
        var element = time.split(':');
        var mSec = element.join('');
        var sec = Math.floor(Number(mSec) * 0.864);

        var newSec = sec % 60;
        var newMint = Math.floor(((sec % 3600) - newSec) / 60);
        var newHr = Math.floor(sec / 3600) % 24;

        output = addPadding(newHr, 2)+':'+addPadding(newMint, 2)+':'+addPadding(newSec, 2);
    }
    return output;
}
// convert metric date to normal
const m2nDate = (date) => {
    var output = null;
    if(checkInputDateFormat(date,'m')){
        var days = date.split('-').reverse().join('');
        var daysAfterGenesis = days - daysTillGenesis;
        var newDate = new Date(1971);
        newDate.setDate(newDate.getDate() + daysAfterGenesis);
        output = addPadding(newDate.getDate(), 2)+'-'+addPadding((newDate.getMonth()+1),2)+'-'+addPadding((newDate.getYear()+1900),4);
    }
    return output;
}
// convert normal time to metric
const n2mTime = (time) => {
    var output = null;
    if(checkInputTimeFormat(time,'n')){
        var element = time.split(':');
        var sec = (Number(element[0]) * 3600) + (Number(element[1]) * 60) + (Number(element[2]));
        var mSec = Math.floor(sec / 0.864);

        var newSec = mSec % 100;
        var newMint = Math.floor(((mSec % 10000) - newSec) / 100);
        var newHr = Math.floor(mSec / 10000);

        output = addPadding(newHr, 1)+':'+addPadding(newMint, 2)+':'+addPadding(newSec, 2);
    }
    return output;
}
// convert normal date to metric
const n2mDate = (date) => {
    var output = null;
    if(checkInputDateFormat(date,'n')){
        var element = date.split('-');
        var milisecs = (new Date(element[2],element[1],element[0])).getTime();

        var daysAfterGenesis = Math.floor(milisecs / msInADay);
        var daysPassed = daysAfterGenesis + daysTillGenesis - 30;
    
        var newYear = Math.floor(daysPassed / 1000);
        var newMonth = Math.floor((daysPassed - newYear * 1000) / 100);
        var newDay = Math.floor(daysPassed - (newYear * 1000) - (newMonth * 100));
    
        output = addPadding(newDay, 2)+'-'+addPadding(newMonth,1)+'-'+addPadding(newYear,4);
    }
    
    return output;
}
export default { now, addTime, addDate, subTime, subDate, m2nTime, n2mTime, m2nDate, n2mDate };