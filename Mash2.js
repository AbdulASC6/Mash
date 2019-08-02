function Mash(){
    return `You will live in a ${getHouse()}, and you will have ${getChildrenCount()} kids, you'll drive a ${getCar()} and your net worth will be ${netWorth()}`;
}

console.log(Mash())

function rand(x){
    let random = Math.floor(Math.random() * x);
    return random;
}

function getHouse(){
    let choice = process.argv[2];
    let house = ["Mansion", "Apartment", "Shack", "House", choice];
    if (choice == undefined);{
        house.pop();
    }
    idx = rand(house.length);
    houses = house[idx]
    
    return houses;
}

function getChildrenCount(){
    let choice = process.argv[3];
    let childrens = rand(10);
    child = [childrens, choice];
    if (choice == undefined);{
        child.pop();
    }
    idx = rand(child.length);
    let child2 = child[idx]
    return child2;
}

function getCar(){
    let choice = process.argv[4];
    let cars = ["lambo", "convertible", "box with wheels", "Telsa", choice];
    if (choice == undefined);{
        cars.pop();
    }
    let idx = rand(cars.length);
    let car = cars[idx]
    return car;
}

function netWorth(){
    let choice = process.argv[7]
    let salaries = Math.floor(Math.random()*10000000)
    let idx = [salaries, choice];
    if (choice == undefined){
        idx.pop();
    }
    let random = Math.floor(Math.random() * idx.length);
    let money = idx[random]
    return money;
 }