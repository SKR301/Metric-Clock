import Conversion from './conversion/conversion.js';
import Arithmatic from './arithmatic/arithmatic.js';
import Display from './display/display.js';

var arg = process.argv;

if(arg[2] == '-c'){
    if(arg[3] == '-m2n'){
        if(arg[4] == '-time'){
            Conversion.m2nTime();
        } else if(arg[4] == '-date'){
            Conversion.m2nDate();
        } else {
            console.log('default');
        }
    }
    if(arg[3] == '-n2m'){
        if(arg[4] == '-time'){
            Conversion.n2mTime();
        } else if(arg[4] == '-date'){
            Conversion.n2mDate();
        } else {
            console.log('default');
        }
    }
} else if(arg[2] == '-now'){
    Display.show();
} else if(arg[2] == '-a'){
    if(arg[3] == '-time'){
        Arithmatic.addTime();
    } else if(arg[3] == '-date'){
        Arithmatic.addDate();
    } else{
        console.log('default');
    }
} else if(arg[2] == '-s'){
    if(arg[3] == '-time'){
        Arithmatic.subTime();
    } else if(arg[3] == '-date'){
        Arithmatic.subDate();
    } else{
        console.log('default');
    }
} else {
    console.log('default');
}
