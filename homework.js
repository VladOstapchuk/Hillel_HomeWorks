const regularFirstSixSymbol = /^[^aAаА]{6,}/;

var searchStr1 = "Wonderful";
var searchStr2 = "Happinness";

StringTest(regularFirstSixSymbol, searchStr1); // true
StringTest(regularFirstSixSymbol, searchStr2); // false

function StringTest(regular, str) {
  if (regular.test(str)) {
    console.log("Серед перших 6 символів тексті " + str + " букви А - немає");
  } else
    console.log("Серед перших 6 символів тексті " + str + " ЗНАЙДЕНА буква А");
}
