const daysTillGenesis = 719529;   //days passed till 1/1/1971
const msInADay = 86400000;
const msInHr = 3600000;
const msInMint = 60000;
const msInSec = 1000;
const conversionRatio = 0.864;

const addPadding = (value, padCheck) => {
    var valLength = value.toString().length;
    if(valLength <= padCheck) {
        return '0'.repeat(padCheck - valLength) + value;
    }
}
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

export default { now, };