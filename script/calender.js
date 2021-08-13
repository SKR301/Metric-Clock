
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var today = new Date();
var todayM = new MDate( today );


var currDate = new Date();
var currDateM = new MDate( currDate );



var currDateElem = document.getElementById( "0mon" );
var currDateMElem = document.getElementById( "00" );



function updateCal () {

    const day = currDate.getDay();
    const month = currDate.getMonth();
    const year = currDate.getFullYear();
    const date = currDate.getDate();
    months[2] = ( year % 4 == 0 ? 29 : 28 );

    let totalPrev = daysInMonth[( month + 11 ) % 12];
    let total = daysInMonth[month];



    firstDate = date % 7;

    firtDay = ( day - firstDate + 7 ) % 7;
    let i = firtDay - 1;
    for ( i = firtDay - 1; i >= 0; i-- ) {
        document.getElementById( 0 + days[i] ).innerHTML = totalPrev.toString();
        document.getElementById( 0 + days[i] ).style.color = "#999";
        totalPrev--;
    }
    let start = 1;
    for ( i = firtDay; i < 7; i++ ) {
        document.getElementById( 0 + days[i] ).innerHTML = start.toString();
        document.getElementById( 0 + days[i] ).style.color = "#fff";
        start++;
    }

    let j = 0;
    let k = i;

    for ( j = 1; j < 6; j++ ) {
        for ( k = 0; k < 7 && start <= total; k++ ) {
            document.getElementById( j.toString() + days[k] ).innerHTML = start.toString();
            document.getElementById( j.toString() + days[k] ).style.color = "#fff";
            start++;

        }
        if ( start > total ) {
            break;
        }
    }
    start = 1;
    for ( ; j < 6; j++ ) {
        for ( ; k < 7; k++ ) {
            document.getElementById( j.toString() + days[k] ).innerHTML = start.toString();
            document.getElementById( j.toString() + days[k] ).style.color = "#999";
            start++;

        }
        k = 0;
    }

    document.getElementById( "mnthBtn" ).innerHTML = months[month];
    document.getElementById( "yrBtn" ).innerHTML = year.toString();




    mYear = currDateM.getYearM();
    mMonth = currDateM.getMonthM();
    mDate = currDateM.getDateM();
    document.getElementById( "mnthBtnM" ).innerHTML = "Month" + ( mMonth );
    document.getElementById( "yrBtnM" ).innerHTML = mYear;
    let dateStr = mDate > 10 ? ( mDate - 1 ).toString() : "0" + ( mDate - 1 );


    currDateMElem.style.color = "#fffe";
    currDateMElem.style.background = "#fff0";
    currDateMElem.style.border = "0px";
    currDateMElem = document.getElementById( dateStr );
    currDateMElem.style.color = "#222";
    currDateMElem.style.background = "#fffc";

}


function monthUp () {
    currDate.setMonth( currDate.getMonth() + 1 );
    currDateM.setDate( currDate );
    updateCal();

}

function monthDn () {
    currDate.setMonth( currDate.getMonth() - 1 );
    currDateM.setDate( currDate );
    updateCal();
}


function yearUp () {
    currDate.setFullYear( currDate.getFullYear() + 1 );
    currDateM.setDate( currDate );
    updateCal();
}

function yearDn () {
    currDate.setFullYear( currDate.getFullYear() - 1 );
    currDateM.setDate( currDate );
    updateCal();
}

function monthUpM () {
    currDateM.addMonthsM( 1 );
    currDate.setDate( currDate.getDate() + 100 );
    updateCal();

}


function monthDnM () {
    currDateM.addMonthsM( -1 );
    currDate.setDate( currDate.getDate() - 100 );
    updateCal();
}


function yearUpM () {
    currDateM.addMonthsM( 10 );
    currDate.setDate( currDate.getDate() + 1000 );
    updateCal();
}
function yearDnM () {

    currDateM.addMonthsM( -10 );
    currDate.setDate( currDate.getDate() - 1000 );
    updateCal();
}

updateCal();



function BtnOnClick ( elem ) {
    currDate.setDate( parseInt( elem.innerHTML ) );
    currDateM.setDate( currDate );
    updateCal();
}