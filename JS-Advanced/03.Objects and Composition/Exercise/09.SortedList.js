function createSortedList() {
  let numbers = [];

  return (object = {
    add: (element) => {
      numbers.push(element);
      numbers = numbers.sort((a, b) => a - b);
    },
    remove: (index) => {
      if (index >= 0 && index < numbers.length) {
        numbers.splice(index, 1);
        numbers = numbers.sort((a, b) => a - b);
      }
    },
    get: (index) => {
        if (index < 0 || index >= numbers.length) {
            throw new Error(`Index doesn't exist`);
        } 
        return numbers[index];
    },
    get size() {
      return numbers.length;
    },
  });
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
