// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(num) {
  // uzupełnij tutaj
  num = num.toString();
  let reversed = '';
  for (let i = num.length - 1; i >= 0; i--) {
    reversed += num[i];
  }
  return parseInt(reversed);
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {5
  // uzupełnij tutaj
  let res = 0;
  array.forEach(el => {
    res += el % 2 ? 0 : el;
  })
  return res;
}

console.log("2.", addEven(tab));
