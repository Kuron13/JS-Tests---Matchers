// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function charHealth (charList) {
  const sortChars = charList.sort((char1, char2) => char2.health - char1.health);
  return sortChars;
}