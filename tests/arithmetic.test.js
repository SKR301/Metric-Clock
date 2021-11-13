import Arithmetic from '../lib/arithmetic/arithmetic.js';

test('addTime:', () => {
    expect(Arithmetic.addTime('1','0:00:00')).toBe('0:01:00');
})