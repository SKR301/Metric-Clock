import Util from "../util/util.js";

class Display{
    static daysTillGenesis = 719529;   //days passed till 1/1/1971
    static msInADay = 86400000;
    static msInHr = 3600000;
    static msInMint = 60000;
    static msInSec = 1000;
    static conversionRatio = 0.864;

    constructor(){
    }
    static now(format = 'Time: %Hh:%Mm:%Ss\nDate: %dd/%mm/%yy'){
        const dateTime = new Date();

        const daysAfterGenesis = Math.floor(dateTime.getTime() / this.msInADay);
        const msPassedToday = dateTime.getHours() * this.msInHr + dateTime.getMinutes() * this.msInMint + dateTime.getSeconds() * this.msInSec + dateTime.getMilliseconds();
    
        const daysPassed = daysAfterGenesis + this.daysTillGenesis;
        const msPassedTodayMetrics = msPassedToday / this.conversionRatio;
    
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