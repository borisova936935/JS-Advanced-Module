function calorieObject(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i+=2) {
        let product = arr[i];
        let calories = arr[i + 1];
        obj[product] = Number(calories);
        
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])