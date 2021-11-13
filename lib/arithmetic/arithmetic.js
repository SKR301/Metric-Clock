import Display from "../display/display.js";
import Util from "../util/util.js";

class Arithmetic{
    constructor(){
        
    }
    static addTime(mint, time){
        (time == undefined)?time = Display.now('%H:%M:%S'): time = time;
        mint = Number(mint);
        
        var output = null;
        var element;
        if(Util.checkInputTimeFormat(time,'m')){
            element = time.split(':');
            var initialTime = Math.floor(Number(time.split(':').join(''))/100);
            var outputTime = initialTime + mint;

            var newSec = (element[2]);
            var newMint = (outputTime % 100);
            var newHr = (Math.floor(outputTime / 100)) % 10;
            
            output = Util.addPadding(newHr,1)+':'+Util.addPadding(newMint,2)+':'+Util.addPadding(newSec,2);
        }
        return output;
    }
    static addDate(day, date){
        (date == undefined)?date = Display.now('%d-%m-%y'): date = date;
        day = Number(day);
        
        var output = null;
        var element;
        if(Util.checkInputDateFormat(date,'m')){
            element = date.split('-');
            var initialDate = Math.floor(Number(date.split('-').reverse().join('')));
            var outputDate = initialDate + day;

            var newDay = (outputDate % 100);
            var newMonth = Math.floor(( (outputDate % 1000) - newDay) / 100);
            var newYear = Math.floor(outputDate / 1000) % 1000;
            
            output = Util.addPadding(newDay,2)+'-'+Util.addPadding(newMonth,1)+'-'+Util.addPadding(newYear,4);
        }
        return output;
    }
    static subTime(mint, time){
        (time == undefined)?time = Display.now('%H:%M:%S'): time = time;
        mint = Number(mint);
        
        var output = null;
        var element;
        if(Util.checkInputTimeFormat(time,'m')){
            element = time.split(':');
            var initialTime = Math.floor(Number(time.split(':').join(''))/100);
            var outputTime = initialTime - mint;
            var newSec = (element[2]);
            var newMint = ((outputTime % 100) + 100) % 100;
            var newHr = (((Math.floor(outputTime / 100)) % 10) + 10) % 10;
            
            output = Util.addPadding(newHr,1)+':'+Util.addPadding(newMint,2)+':'+Util.addPadding(newSec,2);
        }
        return output;
    }
    static subDate(day, date){
        (date == undefined)?date = Display.now('%d-%m-%y'): date = date;
        day = Number(day);
        
        var output = null;
        var element;
        if(Util.checkInputDateFormat(date,'m')){
            element = date.split('-');
            var initialDate = Math.floor(Number(date.split('-').reverse().join('')));
            var outputDate = initialDate - day;
            var newDay = ((outputDate % 100)+100)%100;
            var newMonth = ((((outputDate % 1000) - newDay) / 100)+10)%10;
            var newYear = ((Math.floor(outputDate / 1000))+1000)%1000;
            
            output = Util.addPadding(newDay,2)+'-'+Util.addPadding(newMonth,1)+'-'+Util.addPadding(newYear,4);
        }
        return output;
    }
}

export default Arithmetic;
