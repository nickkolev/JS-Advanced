function solve(month, year) {
     console.log(new Date(year, month, 0).getDate());
}

// July
solve(7,2009); // 31
// February
solve(2,2009); // 28
solve(2,2021);