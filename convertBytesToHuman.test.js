/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(true)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B')
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(10737418248)).toBe('10 GB')
  expect(convertBytesToHuman(1099511627776)).toBe('1 TB')
  expect(convertBytesToHuman(1000000000000000000)).toBe('888.18 PB')
  expect(convertBytesToHuman(10000000000000008000)).toBe('8.67 EB')
});

test('Возвращает false для нецелого отрицательного числа', () => {
  expect(convertBytesToHuman(-10)).toBe(false)
  expect(convertBytesToHuman(0.5)).toBe(false)
});
