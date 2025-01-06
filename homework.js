// Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

// Наприклад pow(2,3) функція поверне значення 8.

function pow(a, b) {
  let result;

  if (isNaN(a) || isNaN(b)) {
    console.log("Please input correct value (must be number)");
    console.log("Type of some value is " + typeof a);
  }
  if (b === 0) {
    result = 1;
  }
  if (b === 1) {
    result = a;
  }
  if (b < 0) {
    result = a;
    for (let i = 0; i < -b - 1; i++) {
      result = result * a;
    }
    result = 1 / result;
  }
  if (b > 0 || b < 1) {
  }
  if (b > 1) {
    result = a;
    for (let i = 0; i < b - 1; i++) {
      result = result * a;
    }
  }

  console.log("Result is: " + result);
}

pow(2, -4);
