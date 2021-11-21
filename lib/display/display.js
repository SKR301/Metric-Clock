import Util from "../util/util.js";

class Display{
    constructor(){
        
    }
    static now(format = 'Time: %Hh:%Mm:%Ss\nDate: %dd-%mm-%yy'){
        const dateTime = new Date();

        const daysAfterGenesis = Math.floor(dateTime.getTime() / Util.msInADay);
        const msPassedToday = dateTime.getHours() * Util.msInHr + dateTime.getMinutes() * Util.msInMint + dateTime.getSeconds() * Util.msInSec + dateTime.getMilliseconds();
    
        const daysPassed = daysAfterGenesis + Util.daysTillGenesis;
        const msPassedTodayMetrics = msPassedToday / Util.conversionRatio;
    
        var mYear = Math.floor(daysPassed / 1000);
        var mMonth = Math.floor((daysPassed - mYear * 1000) / 100);
        var mDay = Math.floor(daysPassed - (mYear * 1000) - (mMonth * 100));
    
        var mHour = Math.floor(msPassedTodayMetrics / 10000000);
        var mMin = Math.floor((msPassedTodayMetrics - (mHour * 10000000)) / 100000);
        var mSec = Math.floor((msPassedTodayMetrics - (mHour * 10000000) - (mMin * 100000)) / 1000);

        mYear = Util.addPadding(mYear,4);mMonth = Util.addPadding(mMonth,1);mDay = Util.addPadding(mDay,2);
        mHour = Util.addPadding(mHour,1);mMin = Util.addPadding(mMin,2);mSec = Util.addPadding(mSec,2);

        const output = format.replaceAll('%H',mHour).replaceAll('%M',mMin).replaceAll('%S',mSec).replaceAll('%d',mDay).replaceAll('%m',mMonth).replaceAll('%y',mYear);
        
        return output;
    }
}

export default Display;