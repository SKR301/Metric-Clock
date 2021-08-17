


const daysTillGenesis = 719529;   //days passed till 1/1/1971
const msInADay = 86400000;
const secsInHr = 3600;
const secsInMint = 60;
const oldSecToNewSecRatio = 0.864;
const msInHr = 3600000;
const msInMint = 60000;
const msInSec = 1000;
const conversionRatio = 0.864;




class MDate {


    constructor( date ) {

        let daysAfterGenesis = Math.floor( date.getTime() / msInADay );
        let daysPassed = daysAfterGenesis + daysTillGenesis;
        let msPassedToday = date.getHours() * msInHr + date.getMinutes() * msInMint + date.getSeconds() * msInSec + date.getMilliseconds();
        let msPassedTodayMetrics = msPassedToday / conversionRatio;
        let secsPassedToday = date.getHours() * secsInHr + date.getMinutes() *
            secsInMint + date.getSeconds();
        let secsPassedTodayMetrics = secsPassedToday / oldSecToNewSecRatio;
        let mYear = Math.floor( daysPassed / 1000 );
        let mMonth = Math.floor( ( daysPassed - mYear * 1000 ) / 100 );
        let mDate = Math.floor( daysPassed - ( mYear * 1000 ) - ( mMonth * 100 ) );
        let mHour = Math.floor( secsPassedTodayMetrics / 10000 );
        let mMin = Math.floor( ( secsPassedTodayMetrics - mHour * 10000 ) / 100 );
        let mSec = Math.floor( secsPassedTodayMetrics - ( mHour * 10000 ) - ( mMin * 100 ) );
        let mMs = Math.floor( msPassedTodayMetrics - ( mHour * 10000000 ) - ( mMin * 100000 ) - ( mSec * 1000 ) );


        this.mYear = mYear;
        this.mMonth = mMonth;
        this.mDate = mDate;
        this.mHour = mHour;
        this.mMin = mMin;
        this.mSec = mSec;
        this.mMs = mMs;

    }

    getDateM () {
        return this.mDate;
    }


    getMonthM () {
        return this.mMonth;
    }
    getYearM () {
        return this.mYear;
    }

    getHourM () {
        return this.mHour;
    }

    getMinM () {
        return this.mMin;
    }
    getSecM () {
        return this.mSec;
    }
    getMsM () {
        return this.mMs;
    }
    addDaysM ( days ) {
        this.mDate += days;
        this.mMonth += Math.floor( this.mDate / 100 );
        this.mYear += Math.floor( this.mMonth / 10 );
        this.mDate % 100;
        this.mMonth % 10;
    }
    addMonthsM ( months ) {
        this.mMonth += months;
        this.mYear += Math.floor( this.mMonth / 10 );
        this.mMonth % 10;
    }



    setDate ( date ) {
        let daysAfterGenesis = Math.floor( date.getTime() / msInADay );
        let daysPassed = daysAfterGenesis + daysTillGenesis;
        let msPassedToday = date.getHours() * msInHr + date.getMinutes() * msInMint + date.getSeconds() * msInSec + date.getMilliseconds();
        let msPassedTodayMetrics = msPassedToday / conversionRatio;
        let secsPassedToday = date.getHours() * secsInHr + date.getMinutes() *
            secsInMint + date.getSeconds();
        let secsPassedTodayMetrics = secsPassedToday / oldSecToNewSecRatio;
        let mYear = Math.floor( daysPassed / 1000 );
        let mMonth = Math.floor( ( daysPassed - mYear * 1000 ) / 100 );
        let mDate = Math.floor( daysPassed - ( mYear * 1000 ) - ( mMonth * 100 ) );
        let mHour = Math.floor( secsPassedTodayMetrics / 10000 );
        let mMin = Math.floor( ( secsPassedTodayMetrics - mHour * 10000 ) / 100 );
        let mSec = Math.floor( secsPassedTodayMetrics - ( mHour * 10000 ) - ( mMin * 100 ) );
        let mMs = Math.floor( msPassedTodayMetrics - ( mHour * 10000000 ) - ( mMin * 100000 ) - ( mSec * 1000 ) );


        this.mYear = mYear;
        this.mMonth = mMonth;
        this.mDate = mDate;
        this.mHour = mHour;
        this.mMin = mMin;
        this.mSec = mSec;
        this.mMs = mMs;
    }
}



