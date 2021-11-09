import Display from "../display/display.js";
import Util from "../util/util.js";

class Arithmatic{
    constructor(){
        
    }
    static addTime(mint, time){
        (time == undefined)?time = Display.now('%H:%M:%S'): time = time;
        mint = Number(mint);
        
        var output = null;
        var element;
        if(Util.checkInputTimeFormat(time)){
            element = time.split(':');
            var initialTime = Math.floor(Number(time.split(':').join(''))/100);
            var outputTime = initialTime + mint;
            var newSec = (element[2]);
            var newMint = (outputTime % 100);
            var newHr = (Math.floor(outputTime / 100)) % 10;
            
            output = Display.addPadding(newHr,1)+':'+Display.addPadding(newMint,2)+':'+Display.addPadding(newSec,2);
        }
        return output;
    }
    static addDate(day, date){
        (date == undefined)?date = Display.now('%y-%m-%d'): date = date;
        day = Number(day);
        
        var output = null;
        var element;
        if(Util.checkInputDateFormat(date)){
            element = date.split('-');
            var initialDate = Math.floor(Number(date.split('-').reverse().join('')));
            var outputDate = initialDate + day;
            var newDay = outputDate % 100;
            var newMonth = ((outputDate % 1000) - newDay) / 100;
            var newYear = Math.floor(outputDate / 1000);
            
            output = Display.addPadding(newDay,2)+'-'+Display.addPadding(newMonth,2)+'-'+Display.addPadding(newYear,4);
        }
        return output;
    }
    static subTime(mint, time){
        
    }
    static subDate(day, date){
        
    }
}

export default Arithmatic;