import Conversion from '../cli-lib/conversion/conversion';

test('m2n Time=> Convert metric time to normal:', () => {
    expect(Conversion.m2nTime('8:96:00').substr(0,5)).toBe('21:30');
});
test('n2m Time=> Convert normal time to metric:', () => {
    expect(Conversion.n2mTime('21:30:15').substr(0,4)).toBe('8:96');
});
test('m2n Time=> Convert 0 metric time to normal:', () => {
    expect(Conversion.m2nTime('0:00:00')).toBe('00:00:00');
});
test('n2m Time=> Convert 0 normal time to metric:', () => {
    expect(Conversion.n2mTime('00:00:00')).toBe('0:00:00');
});

test('m2n Date=> Convert metric date to normal:', () => {
    expect(Conversion.m2nDate('59-4-0738')).toBe('30-10-2021');
});
test('n2m Date=> Convert normal date to metric:', () => {
    expect(Conversion.n2mDate('30-10-2021')).toBe('59-4-0738');
});