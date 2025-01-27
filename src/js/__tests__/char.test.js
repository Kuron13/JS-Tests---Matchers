import charHealth from '../app.js'

test('Testing sorting characters in descending order of their health.', () => {
  const charList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]

  const expectedList = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]
  
  const result = charHealth(charList);
  console.log(result);
  expect(result).toEqual(expectedList);
});