import Conversion from './conversion/conversion.js';
import Arithmatic from './arithmetic/arithmetic.js';
import Display from './display/display.js';
import Util from './util/util.js';

var arg = process.argv;

if(arg[2] == '-now'){
    (arg[3]== '') ? Display.now():Display.now(arg[3]);
} else if(arg[2] == '-c'){
    if(arg[3] == 'm2n'){
        if(arg[4] == 'time'){
            Conversion.m2nTime();
        } else if(arg[4] == 'date'){
            Conversion.m2nDate();
        } else {
            Util.invalidArguments(arg[3]);
        }
    }
    if(arg[3] == 'n2m'){
        if(arg[4] == 'time'){
            Conversion.n2mTime();
        } else if(arg[4] == 'date'){
            Conversion.n2mDate();
        } else {
            Util.invalidArguments(arg[3]);
        }
    } else {
        Util.invalidArguments(arg[3]);
    }
} else if(arg[2] == '-a'){
    if(arg[3] == 'time'){
        Arithmatic.addTime(arg[4], arg[5]);
    } else if(arg[3] == 'date'){
        Arithmatic.addDate(arg[4], arg[5]);
    } else{
        Util.invalidArguments(arg[3]);
    }
} else if(arg[2] == '-s'){
    if(arg[3] == 'time'){
        Arithmatic.subTime(arg[4], arg[5]);
    } else if(arg[3] == 'date'){
        Arithmatic.subDate(arg[4], arg[5]);
    } else{
        Util.invalidArguments(arg[3]);
    }
} else if(arg[2] == '-h' || arg[2] == '--help'){
    Util.help();
} else {
    Util.invalidArguments(arg[2]);
}