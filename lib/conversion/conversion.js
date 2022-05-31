import Display from "../display/display.js";
import Util from "../util/util.js";

class Conversion{
    constructor(){
        
    }
    static m2nTime(time){
        var output = null;
        if(Util.checkInputTimeFormat(time,'m')){
            var element = time.split(':');
            var mSec = element.join('');
            var sec = Math.floor(Number(mSec) * 0.864);

            var newSec = sec % 60;
            var newMint = Math.floor(((sec % 3600) - newSec) / 60);
            var newHr = Math.floor(sec / 3600) % 24;

            output = Util.addPadding(newHr, 2)+':'+Util.addPadding(newMint, 2)+':'+Util.addPadding(newSec, 2);
        }
        return output;
    }
    static m2nDate(date){
        var output = null;
        if(Util.checkInputDateFormat(date,'m')){
            var days = date.split('-').reverse().join('');
            var daysAfterGenesis = days - Util.daysTillGenesis;
            var newDate = new Date(1971);
            newDate.setDate(newDate.getDate() + daysAfterGenesis);
            output = Util.addPadding(newDate.getDate(), 2)+'-'+Util.addPadding((newDate.getMonth()+1),2)+'-'+Util.addPadding((newDate.getYear()+1900),4);
        }
        return output;
    }
    static n2mTime(time){
        var output = null;
        if(Util.checkInputTimeFormat(time,'n')){
            var element = time.split(':');
            var sec = (Number(element[0]) * 3600) + (Number(element[1]) * 60) + (Number(element[2]));
            var mSec = Math.floor(sec / 0.864);

            var newSec = mSec % 100;
            var newMint = Math.floor(((mSec % 10000) - newSec) / 100);
            var newHr = Math.floor(mSec / 10000);

            output = Util.addPadding(newHr, 1)+':'+Util.addPadding(newMint, 2)+':'+Util.addPadding(newSec, 2);
        }
        return output;
    }
    static n2mDate(date){
        var output = null;
        if(Util.checkInputDateFormat(date,'n')){
            var element = date.split('-');
            var milisecs = (Date.UTC(element[2],element[1]-1,element[0]));

            var daysAfterGenesis = Math.floor(milisecs / Util.msInADay);
            var daysPassed = daysAfterGenesis + Util.daysTillGenesis;
        
            var newYear = Math.floor(daysPassed / 1000);
            var newMonth = Math.floor((daysPassed - newYear * 1000) / 100);
            var newDay = Math.floor(daysPassed - (newYear * 1000) - (newMonth * 100));
        
            output = Util.addPadding(newDay, 2)+'-'+Util.addPadding(newMonth,1)+'-'+Util.addPadding(newYear,4);
        }
        
        return output;
    }
}

export default Conversion;