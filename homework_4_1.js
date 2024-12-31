// 1. 'number' + 3 + 3
console.log("number" + 3 + 3);
// Результат: 'number33'
// 'number' - рядок, конкатенація з 3 і ще 3 дає 'number33'.

// 2. null + 3
console.log(null + 3);
// Результат: 3
// null перетворюється на 0. 0 + 3 = 3.

// 3. 5 && "qwerty"
console.log(5 && "qwerty");

// Результат: "qwerty"
// Логічне "і" повертає останнє істинне значення, оскільки 5 істинне, результат: "qwerty".

// 4. +'40' + +'2' + "hillel"
console.log(+"40" + +"2" + "hillel");
// Результат: '42hillel'
// +'40' → 40, +'2' → 2, 40 + 2 = 42. Додаємо "hillel" як рядок.

// 5. '10' - 5 === 6
console.log("10" - 5 === 6);
// Результат: false
// '10' перетворюється на 10. 10 - 5 = 5. 5 === 6 → false.

// 6. true + false
console.log(true + false);
// Результат: 1
// true → 1, false → 0. 1 + 0 = 1.

// 7. '4px' - 3
console.log("4px" - 3);
// Результат: NaN
// '4px' не можна перетворити на число.

// 8. '4' - 3
console.log("4" - 3);
// Результат: 1
// '4' перетворюється на 4. 4 - 3 = 1.

// 9. '6' + 3 ** 0
console.log("6" + 3 ** 0);
// Результат: '61'
// 3 ** 0 = 1. Конкатенація: '6' + '1' → '61'.

// 10. 12 / '6'
console.log(12 / "6");
// Результат: 2
// '6' перетворюється на 6. 12 / 6 = 2.

// 11. '10' + (5 === 6)
console.log("10" + (5 === 6));
// Результат: '10false'
// 5 === 6 → false. Конкатенація: '10' + 'false' → '10false'.

// 12. null == ''
console.log(null == "");
// Результат: false
// null дорівнює лише null або undefined.

// 13. 3 ** (9 / 3)
console.log(3 ** (9 / 3));
// Результат: 27
// 9 / 3 = 3. 3 ** 3 = 27.

// 14. !!'false' == !!'true'
console.log(!!"false" == !!"true");
// Результат: true
// Обидва рядки істинні. !!'false' → true, !!'true' → true. true == true → true.

// 15. 0 || '0' && 1
console.log(0 || ("0" && 1));
// Результат: 1
// '0' && 1 → 1. 0 || 1 → 1.

// 16. (+null == false) < 1
console.log((+null == false) < 1);
// Результат: false
// +null → 0. 0 == false → true. true < 1 → false.

// 17. false && true || true
console.log((false && true) || true);
// Результат: true
// false && true → false. false || true → true.

// 18. false && (false || true)
console.log(false && (false || true));
// Результат: false
// false || true → true. false && true → false.

// 19. (+null == false) < 1 ** 5
console.log((+null == false) < 1 ** 5);
// Результат: false
// +null → 0. 0 == false → true. 1 ** 5 = 1. true < 1 → false.
