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
    static m2nDate(){
        console.log('m2nDate');
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

            output = Display.addPadding(newHr, 1)+':'+Display.addPadding(newMint, 2)+':'+Display.addPadding(newSec, 2);
        }
        return output;
    }
    static n2mDate(){
        console.log('n2mDate');
    }
}

export default Conversion;