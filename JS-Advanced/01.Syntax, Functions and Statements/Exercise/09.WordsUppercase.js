function solve(string) {
    string = string.toUpperCase();
    let regex = /[A-Za-z0-9]+/g;
    strArray = [...string.matchAll(regex)];
    console.log(strArray.join(", "));
}

solve('Hi, how are you?');
solve('hello');