const test = require('node:test');
const assert = require('node:assert');
const findDates = require('./index')

test('следующий четверг', (t) => {
    const data = findDates(`следующий четверг`, new Date('2023-01-01'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-12').setHours(0,0,0,0));
});

test('предыдущий четверг', (t) => {
    const data = findDates(`предыдущий четверг`, new Date('2023-01-01'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2022-12-29').setHours(0,0,0,0));
});

test('этот четверг', (t) => {
    const data = findDates(`этот четверг`, new Date('2023-01-01'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-05').setHours(0,0,0,0));
})

test('2023-12-30', (t) => {
    const data = findDates(`2023-12-30`)
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-12-30').setHours(0,0,0,0));
})

test('13 января от 2023-01-01', (t) => {
    const data = findDates(`13 января`, new Date('2023-01-01'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-13').setHours(0,0,0,0));
})

test('13 января от 2022-12-15', (t) => {
    const data = findDates(`13 января`, new Date('2022-12-15'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-13').setHours(0,0,0,0));
})

test('13 января от 2023-01-25', (t) => {
    const data = findDates(`13 января`, new Date('2023-01-25'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-13').setHours(0,0,0,0));
})

test('завтра', (t) => {
    const data = findDates(`завтра`, new Date('2023-01-25'))
    assert.strictEqual(data[0].date.setHours(0,0,0,0), new Date('2023-01-26').setHours(0,0,0,0));
})

