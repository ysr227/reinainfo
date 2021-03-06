import { createCyclicDates, durationStringToMinutes, parseDate, toDateString } from '../utils/day'

test('parse date', () => {
    expect(parseDate('180801')).toEqual(new Date(2018, 7, 1))
})

test('parse date with time', () => {
    expect(parseDate('0801.0117')).toEqual(new Date(new Date().getFullYear(), 7, 1, 1, 17))
})

test('to date string', () => {
    expect(toDateString(new Date(2018, 7, 1))).toBe('8/1(水)')
})

test('create cyclic dates with weekNumber', () => {
    expect(
        createCyclicDates({
            dayOfWeek: 'fri',
            timeOfDay: '0605',
            weekNumbers: [2, 4],
            since: '180804', // saturday
            until: '180824.0605',
        })
    ).toEqual([new Date(2018, 7, 10, 6, 5), new Date(2018, 7, 24, 6, 5)])
})

test('create cyclic dates with weekInterval', () => {
    expect(
        createCyclicDates({
            dayOfWeek: 'mon',
            timeOfDay: '',
            weekInterval: 2,
            since: '180811',
            times: 2,
        })
    ).toEqual([new Date(2018, 7, 13, 0, 0), new Date(2018, 7, 27, 0, 0)])
})

test('duration string to minutes', () => {
    expect(durationStringToMinutes('2d.1w.3h.4m')).toBe(2 * 24 * 60 + 1 * 7 * 24 * 60 + 3 * 60 + 4)
})
