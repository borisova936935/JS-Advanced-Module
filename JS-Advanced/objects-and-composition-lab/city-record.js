function cityRecord(city, population, treasury) {
    let record = {
        name: city,
        population: population,
        treasury: treasury,
    };
    return record;
}
cityRecord('Tortuga',
    7000,
    15000)

cityRecord('Santo Domingo',
    12000,
    23500)

//second way--->>>..........dynamic......................................

function cityRecord(city, population, treasury) {
    let record = {};

    record.name = city;
    record.population = population;
    record.treasury = treasury;

    return record;
}
cityRecord('Tortuga',
    7000,
    15000)

cityRecord('Santo Domingo',
    12000,
    23500)


//third way--->>>..........shorthand syntax................................

function cityRecord(name, population, treasury) {
    let record = {
        name,
        population,
        treasury,
    };
    return record;
}
cityRecord('Tortuga',
    7000,
    15000)

cityRecord('Santo Domingo',
    12000,
    23500)