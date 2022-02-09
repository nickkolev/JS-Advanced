function solve(input) {

    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let heroInfo = input[i].split(" / ");
        let name = heroInfo[0];
        let age = Number(heroInfo[1]);
        let items = heroInfo[2] ? heroInfo[2].split(", ") : [];
    

        let hero = {name, 'level': age, items}
        heroes.push(hero)
    }
    console.log(JSON.stringify(heroes))
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / ']
)