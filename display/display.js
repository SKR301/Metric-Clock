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
        this.dateTime = new Date();

        this.daysAfterGenesis = Math.floor(this.dateTime.getTime() / this.msInADay);
        this.msPassedToday = this.dateTime.getHours() * this.msInHr + this.dateTime.getMinutes() * this.msInMint + this.dateTime.getSeconds() * this.msInSec + this.dateTime.getMilliseconds();
    
        this.daysPassed = this.daysAfterGenesis + this.daysTillGenesis;
        this.msPassedTodayMetrics = this.msPassedToday / this.conversionRatio;
    
        this.mYear = Math.floor(this.daysPassed / 1000);
        this.mMonth = Math.floor((this.daysPassed - this.mYear * 1000) / 100);
        this.mDay = Math.floor(this.daysPassed - (this.mYear * 1000) - (this.mMonth * 100));
    
        this.mHour = Math.floor(this.msPassedTodayMetrics / 10000000);
        this.mMin = Math.floor((this.msPassedTodayMetrics - (this.mHour * 10000000)) / 100000);
        this.mSec = Math.floor((this.msPassedTodayMetrics - (this.mHour * 10000000) - (this.mMin * 100000)) / 1000);
        // this.mMs = Math.floor(this.msPassedTodayMetrics - (this.mHour * 10000000) - (this.mMin * 100000) - (this.mSec * 1000));

        // (format == undefined)?format = 'Time: %Hh:%Mm:%Ss\nDate: %dd/%mm/%yy':true;

        console.log(format.replaceAll('%H',this.mHour).replaceAll('%M',this.mMin).replaceAll('%S',this.mSec).replaceAll('%d',this.mDay).replaceAll('%m',this.mMonth).replaceAll('%y',this.mYear));
    }
}

export default Display;