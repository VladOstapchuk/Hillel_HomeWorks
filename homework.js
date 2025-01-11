var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
};

//Розрахунок суми значень прайсів всіх послуг в об'єкті
function price(object) {
  let totalPrice = 0;
  for (const key in object) {
    if (validityСheck(key) && validityСheck(object[key])) {
      totalPrice += valuePreparation(object[key]);
    }
  }
  return totalPrice;
}

//Визнечення мінімального прайсу серед всіх послуг в об'єкті
function minPrice(object) {
  let minPrice = Infinity;
  for (const key in object) {
    if (validityСheck(key) && validityСheck(object[key])) {
      if (minPrice > valuePreparation(object[key])) {
        minPrice = valuePreparation(object[key]);
      }
    }
  }
  return minPrice;
}

//Визнечення максимального прайсу серед всіх послуг в об'єкті
function maxPrice(object) {
  let maxPrice = -Infinity;
  for (const key in object) {
    if (validityСheck(key) && validityСheck(object[key])) {
      if (maxPrice < valuePreparation(object[key])) {
        maxPrice = valuePreparation(object[key]);
      }
    }
  }
  return maxPrice;
}

//Перевірка значення на валідність (Не null, Не NaN, Не функція, Це рядок
// і Рядок не порожній (ігноруються пробіли))
function validityСheck(value) {
  if (
    value !== null && // Не null
    !Number.isNaN(value) && // Не NaN
    typeof value !== "function" && // Не функція
    typeof value === "string" && // Це рядок
    value.trim() !== "" // Рядок не порожній (ігноруються пробіли)
  ) {
    return true;
  }
  return false;
}

//Отримуємо тільки значення прайса зі строки і повертаємо його у Float форматі
function valuePreparation(value) {
  return parseFloat(value.slice(0, -4));
}

console.log("Total price: ", price(services));
console.log("Min price: ", minPrice(services));
console.log("Max price: ", maxPrice(services));
services["Розбити скло"] = "200 грн";
services["Протестувати"] = "5 грн";
console.log("Total price: ", price(services));
console.log("Min price: ", minPrice(services));
console.log("Max price: ", maxPrice(services));
