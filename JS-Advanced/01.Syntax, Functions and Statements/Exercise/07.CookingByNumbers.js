function solve(numChar, o1, o2, o3, o4, o5) {

  let operations = [o1, o2, o3, o4, o5];
  let number = Number(numChar);

  let chop = function (number) {
    return number / 2;
  };
  let dice = function (number) {
    return Math.sqrt(number);
  };
  let spice = function (number) {
    return number + 1;
  };
  let bake = function (number) {
    return number * 3;
  };
  let fillet = function (number) {
    return number * 0.8;
  };

  for (let index = 0; index < operations.length; index++) {
    let currentCommand = operations[index];
    switch (currentCommand) {
      case 'chop':
          number = chop(number)
        break;
      case 'dice':
        number = dice(number)
        break;
      case 'spice':
        number = spice(number)
        break;
      case 'bake':
        number = bake(number)
        break;
      case 'fillet':
        number = fillet(number)
        break;
      default:
        break;
    }
    console.log(number)
  }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
