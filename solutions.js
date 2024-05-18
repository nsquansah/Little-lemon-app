// Step 1
function logDairy() {
    const dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (var item of dairy) {
        console.log(item);
    }
}

// logDairy(git);

// Step 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var entry of Object.keys(bird))
    console.log( entry, ": ", bird[entry]);
}

birdCan();

// Step 3
function animalCan() {
    for (var entry of Object.keys(bird))
        console.log(entry, ": ", `${bird[entry]}`);
    
    for (var entry of Object.keys(animal))
    console.log( entry, ": ", `${animal[entry]}`);
}

animalCan();
