function constructorCrew(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += 1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}
constructorCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
constructorCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })
constructorCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })