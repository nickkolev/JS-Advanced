function solve(input) {

    let output = [];
    
    for (let i = 1; i < input.length; i++) {
        let currentTown = input[i].split(" | ")[0].replace("| ", "");
        let currentLatitude = Number(input[i].split(" | ")[1]);
        let currentLongitude = Number(input[i].split(" | ")[2].replace(" |", ""));

        currentLatitude = parseFloat(currentLatitude.toFixed(2));
        currentLongitude = parseFloat(currentLongitude.toFixed(2));

        output.push({Town: currentTown, Latitude: currentLatitude, Longitude: currentLongitude});
    }
    console.log(JSON.stringify(output));
}

solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
