function updateCal() {
    const dateTime = new Date();
    const day = dateTime.getDay();
    const month = dateTime.getMonth();
    const year = dateTime.getFullYear();
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const daysInMonth = [31, (year % 4 == 0 ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = dateTime.getDate();
    let dateGrid = [];
    let index = Math.floor(date / 7);

    let temp = date;

    let totalPrev = daysInMonth[(month + 11) % 12];
    let total = daysInMonth[month];
    let totalNext = daysInMonth[(month + 1) % 12];


    firstDate = date % 7;

    firtDay = (day - firstDate + 7) % 7;
    let i = firtDay - 1;
    for (i = firtDay - 1; i >= 0; i--) {
        document.getElementById(0 + days[i]).innerHTML = totalPrev.toString();
        document.getElementById(0 + days[i]).style.color = "#999";
        totalPrev--;
    }
    let start = 1;
    for (i = firtDay; i < 7; i++) {
        document.getElementById(0 + days[i]).innerHTML = start.toString();
        document.getElementById(0 + days[i]).style.color = "#fff";
        start++;
    }

    let j = 0;
    let k = i;
    for (j = 1; j < 6; j++) {
        for (k = 0; k < 7 && start <= total; k++) {
            document.getElementById(j.toString() + days[k]).innerHTML = start.toString();
            if (start == date) {
                document.getElementById(j.toString() + days[k]).style.color = "#111";
                document.getElementById(j.toString() + days[k]).style.background = "#fffc";
                document.getElementById(j.toString() + days[k]).style.border = "1px solid black";
                start++;
                continue;
            }
            document.getElementById(j.toString() + days[k]).style.color = "#fff";
            start++;

        }
        if (start > total) {
            break;
        }
    }
    start = 1;
    for (; j < 6; j++) {
        for (; k < 7; k++) {
            document.getElementById(j.toString() + days[k]).innerHTML = start.toString();
            document.getElementById(j.toString() + days[k]).style.color = "#999";
            start++;

        }
        k = 0;
    }

    document.getElementById("mnthBtn").innerHTML = months[month];
    document.getElementById("yrBtn").innerHTML = year.toString();

    const daysTillGenesis = 719529;   //days passed till 1/1/1971
    const msInADay = 86400000;
    const secsInHr = 3600;
    const secsInMint = 60;
    const oldSecToNewSecRatio = 0.864;
    const msInHr = 3600000;
    const msInMint = 60000;
    const msInSec = 1000;
    const conversionRatio = 0.864;
    let daysAfterGenesis = Math.floor(dateTime.getTime() / msInADay);
    let daysPassed = daysAfterGenesis + daysTillGenesis;
    
    let mYear = Math.floor(daysPassed / 1000);
    let mMonth = Math.floor((daysPassed - mYear * 1000) / 100);
    let mDay = Math.floor(daysPassed - (mYear * 1000) - (mMonth * 100));
    
    document.getElementById("mnthBtnM").innerHTML="Month"+(mMonth);
    document.getElementById("yrBtnM").innerHTML=mYear;
    let dateStr = mDay>10?(mDay-1).toString():"0"+(mDay-1);

    document.getElementById(dateStr).style.color="#222";
    document.getElementById(dateStr).style.background="#fffc";

}