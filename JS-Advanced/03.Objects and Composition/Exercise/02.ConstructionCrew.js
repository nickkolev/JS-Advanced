function solve(worker) {

    if(worker.dizziness) {
        let requredHidration = worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated += requredHidration;
        worker.dizziness = false;
    }

    return worker;
}

solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }  
  )