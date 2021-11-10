import Conversion from './conversion/conversion.js';
import Arithmatic from './arithmetic/arithmetic.js';
import Display from './display/display.js';
import Util from './util/util.js';

var arg = process.argv;
var output;

if(arg[2] == '-now'){
    var dateTime;
    (arg[3]== '') ? dateTime = Display.now(): dateTime = Display.now(arg[3]);

    console.log(dateTime);
} 

else if(arg[2] == '-c'){
    if(arg[3] == 'm2n'){
        if(arg[4] == 'time'){
            output = Conversion.m2nTime(arg[5]);
            (output == null)?Util.invalidFormat('time'):console.log(output);
        } else if(arg[4] == 'date'){
            output = Conversion.m2nDate(arg[5]);
            (output == null)?Util.invalidFormat('date'):console.log(output);
        } else {
            Util.invalidArguments(arg[3]);
        }
    } else if(arg[3] == 'n2m'){
        if(arg[4] == 'time'){
            output = Conversion.n2mTime(arg[5]);
            (output == null)?Util.invalidFormat('time'):console.log(output);
        } else if(arg[4] == 'date'){
            output = Conversion.n2mDate(arg[5]);
            (output == null)?Util.invalidFormat('date'):console.log(output);
        } else {
            Util.invalidArguments(arg[3]);
        }
    } else {
        Util.invalidArguments(arg[3]);
    }
} 

else if(arg[2] == '-a'){
    if(arg[3] == 'time'){
        output = Arithmatic.addTime(arg[4], arg[5]);
        (output == null)?Util.invalidFormat('time'):console.log(output);
    } else if(arg[3] == 'date'){
        output = Arithmatic.addDate(arg[4], arg[5]);
        (output == null)?Util.invalidFormat('date'):console.log(output);
    } else{
        Util.invalidArguments(arg[3]);
    }
} 

else if(arg[2] == '-s'){
    if(arg[3] == 'time'){
        output = Arithmatic.subTime(arg[4], arg[5]);
        (output == null)?Util.invalidFormat('time'):console.log(output);
    } else if(arg[3] == 'date'){
        output = Arithmatic.subDate(arg[4], arg[5]);
        (output == null)?Util.invalidFormat('date'):console.log(output);
    } else{
        Util.invalidArguments(arg[3]);
    }
} 

else if(arg[2] == '-h' || arg[2] == '--help'){
    Util.help();
} 

else {
    Util.invalidArguments(arg[2]);
}
