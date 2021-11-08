const daysTillGenesis = 719529;   //days passed till 1/1/1971
const msInADay = 86400000;
const secsInHr = 3600;
const secsInMint = 60;
const oldSecToNewSecRatio = 0.864;
const msInHr = 3600000;
const msInMint = 60000;
const msInSec = 1000;
const conversionRatio = 0.864;

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const hrD = document.querySelector('#hrD');
const mnD = document.querySelector('#mnD');
const scD = document.querySelector('#scD');

setInterval(() => {
    let dateTime = new Date();
    let secsPassedToday = dateTime.getHours() * secsInHr + dateTime.getMinutes() * secsInMint + dateTime.getSeconds();
    let msPassedToday = dateTime.getHours() * msInHr + dateTime.getMinutes() * msInMint + dateTime.getSeconds() * msInSec + dateTime.getMilliseconds();
    let msPassedTodayMetrics = msPassedToday / conversionRatio;
    let secsPassedTodayMetrics = secsPassedToday / oldSecToNewSecRatio;

    let mHour = Math.floor(secsPassedTodayMetrics / 10000);
    let mMin = Math.floor((secsPassedTodayMetrics - mHour * 10000) / 100);
    let mSec = Math.floor(secsPassedTodayMetrics - (mHour * 10000) - (mMin * 100));
    let mMs = Math.floor(msPassedTodayMetrics - (mHour * 10000000) - (mMin * 100000) - (mSec * 1000));

    let day = dateTime;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let ms = day.getMilliseconds() * deg / 1000;
    let msoffset = mMs * 3.6 / 1000;
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm + ss / 60}deg)`;
    sc.style.transform = `rotateZ(${ss + ms}deg)`;

    hrD.style.transform = `rotateZ(${(mHour * 36) + (mMin * 0.36)}deg)`;
    mnD.style.transform = `rotateZ(${mMin * 3.6 + mSec * 3.6 / 100}deg)`;
    scD.style.transform = `rotateZ(${mSec * 3.6 + msoffset}deg)`;
});