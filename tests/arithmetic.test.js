import Arithmetic from '../lib/arithmetic/arithmetic.js';

test('addTime=> Add 1 mint in between:', () => {
    expect(Arithmetic.addTime('1','5:50:00')).toBe('5:51:00');
});
test('addTime=> Add 1 mint to last mint of hour:', () => {
    expect(Arithmetic.addTime('1','5:99:00')).toBe('6:00:00');
});
test('addTime=> Add 1 mint to last mint of last hour:', () => {
    expect(Arithmetic.addTime('1','9:99:00')).toBe('0:00:00');
});
test('addTime=> Add 101 mints to last mint of hour:', () => {
    expect(Arithmetic.addTime('101','5:99:00')).toBe('7:00:00');
});
test('addTime=> Add 101 mints to last mint of last hour:', () => {
    expect(Arithmetic.addTime('101','9:99:00')).toBe('1:00:00');
});
test('addTime=> Add 101 mints to last mint of 2nd last hour:', () => {
    expect(Arithmetic.addTime('101','8:99:00')).toBe('0:00:00');
});

test('addDate=> Add 1 day in between:', () => {
    expect(Arithmetic.addDate('1','50-5-0000')).toBe('51-5-0000');
});
test('addDate=> Add 1 day to last day of month:', () => {
    expect(Arithmetic.addDate('1','99-5-0000')).toBe('00-6-0000');
});
test('addDate=> Add 1 day to last day of last month:', () => {
    expect(Arithmetic.addDate('1','99-9-0000')).toBe('00-0-0001');
});
test('addDate=> Add 101 day to last day of month:', () => {
    expect(Arithmetic.addDate('101','99-5-0000')).toBe('00-7-0000');
});
test('addDate=> Add 101 mint to last day of last month:', () => {
    expect(Arithmetic.addDate('101','99-9-0000')).toBe('00-1-0001');
});
test('addDate=> Add 101 mint to last day of 2nd last month:', () => {
    expect(Arithmetic.addDate('101','99-8-0000')).toBe('00-0-0001');
});

test('subTime=> Subtract 1 mint in between:', () => {
    expect(Arithmetic.subTime('1','5:50:00')).toBe('5:49:00');
});
test('subTime=> Subtract 1 mint from 1st mint of hour:', () => {
    expect(Arithmetic.subTime('1','5:00:00')).toBe('4:99:00');
});
test('subTime=> Subtract 1 mint from 1st mint of 1st hour:', () => {
    expect(Arithmetic.subTime('1','00:00:00')).toBe('9:99:00');
});
test('subTime=> Subtract 101 mints from 1st mint of hour:', () => {
    expect(Arithmetic.subTime('101','5:00:00')).toBe('3:99:00');
});
test('subTime=> Subtract 101 mints from 1st mint of 1st hour:', () => {
    expect(Arithmetic.subTime('101','0:00:00')).toBe('8:99:00');
});
test('subTime=> Subtract 101 mints from 1st mint of 2nd hour:', () => {
    expect(Arithmetic.subTime('101','1:00:00')).toBe('9:99:00');
});

test('addDate=> Subtract 1 day in between:', () => {
    expect(Arithmetic.subDate('1','50-5-0000')).toBe('49-5-0000');
});
test('addDate=> Subtract 1 day from 1st day of month:', () => {
    expect(Arithmetic.subDate('1','00-5-0000')).toBe('99-4-0000');
});
test('addDate=> Subtract 1 day from 1st day of 1st month:', () => {
    expect(Arithmetic.subDate('1','00-0-0000')).toBe('99-9-9999');
});
test('addDate=> Subtract 101 day from 1st day of month:', () => {
    expect(Arithmetic.subDate('101','00-5-0000')).toBe('99-3-0000');
});
test('addDate=> Subtract 101 day from 1st day of 1st month:', () => {
    expect(Arithmetic.subDate('101','00-0-0000')).toBe('99-8-9999');
});
test('addDate=> Subtract 101 day from 1st day of 2nd month:', () => {
    expect(Arithmetic.subDate('101','00-1-0000')).toBe('99-9-9999');
});