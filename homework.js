//Опис ДЗ: Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість
//  випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних
//  серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50?
// Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

checkProbabilityTheory(100);

function checkProbabilityTheory(count) {
  let evenNumberCount = 0;
  let oddNumberCount = 0;
  let percentageOddNumbers;
  let percentageEvenNumbers;
  for (let index = 0; index < count; index++) {
    let generetedNumb = getRandomIntInclusive(100, 1000); //call the random function
    //console.log(generetedNumb);
    if (generetedNumb % 2) {
      oddNumberCount++;
    } else evenNumberCount++;
  }

  percentageOddNumbers = (oddNumberCount / count) * 100; //calculating the percentage
  percentageEvenNumbers = (evenNumberCount / count) * 100; //calculating the percentage

  console.log("Кількість згенерованих чисел: ", count);
  console.log("Парних чисел: ", evenNumberCount);
  console.log("Непарних чисел: ", oddNumberCount);
  console.log(
    "Відсоток парних до не парних: ",
    Math.round(percentageEvenNumbers) + // round to the nearest whole number, because sometimes the result is not rounded
      "%" +
      " / " +
      Math.round(percentageOddNumbers) + // round to the nearest whole number, because sometimes the result is not rounded
      "%"
  );
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
