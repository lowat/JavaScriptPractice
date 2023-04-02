function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let timeWaited = 0
    let queriesRan = 0
    for(let i = 0; i < queries.length - 1; i++){
      queriesRan += queries[i];
      timeWaited += queriesRan;
    }
    return timeWaited;
}
