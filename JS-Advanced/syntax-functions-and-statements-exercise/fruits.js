function fruits(fruit, grams, pricePerKilo) {
    let pricePerGram = pricePerKilo / 1000
    let money = pricePerGram * grams;
    let weight = (grams/1000).toFixed(2)
    console.log(`I need $${money.toFixed(2)} to buy ${weight} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80)
fruits('apple', 1563, 2.35)