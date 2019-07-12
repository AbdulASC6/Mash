function Mash(){
    return `You will live in a ${getHouse()}, you will have ${getChildrenCount()}, kids and you will drive a ${getCar()}, the name of your spouse is ${nameOfSpouse()} and she ${Love()}, your salary will be ${Salary()}`;
}

console.log(Mash());

function getHouse(){
    let choice = process.argv[2]
    let house = ["Mansion", "Apartment", "Shack", "House", "Homeless Shelter", choice];
    if (choice == undefined){
        house.pop();
    }
    let idx = Math.floor(Math.random() * house.length);
    let houses = house[idx]
   return houses; 
}


function getChildrenCount(){
    let count = Math.floor(Math.random()*100 + 1);
    let count2 = process.argv[3]
    let idx = [count, count2];
    if (count2 == undefined){
        idx.pop();
    }
    let random = Math.floor(Math.random() * idx.length);
    let child = idx[random]
    return child;
}

function getCar (){
    let choice = process.argv[4]
    let cars = ["Telsa", "Ford Focus", "Ford GT", "Ford Raptor", "Koenigsegg", "2003 Honda Acord","bugatti chiron", "bugatti veyron", choice];
    if (choice == undefined){
        cars.pop();
    }
    let idx = Math.floor(Math.random() * cars.length);
    let car = cars[idx];
    return car;
}

function nameOfSpouse (){
    let choice = process.argv[5]
    let names = ["Chloe", "Emily","Emma","Aliyah", "Olivia", "Lauren", choice];
    if (choice == undefined){
        names.pop();
    }
    let idx = Math.floor(Math.random()*names.length);
    let name = names[idx];
    return name;
}

function Love(){
    let choice = process.argv[6]
    let love = [" is cheating on you", "loves you", "wants a divorce", choice]
    if (choice == undefined){
        love.pop();
    }
    let idx = Math.floor(Math.random()*love.length);
    let Love1 = love[idx];
    if(Love1 == 0){
       let cheat = ["Davie", "Jaden", "Zymir", "Monil", "Danail", "Ahmed"]
       let idx2 = Math.floor(Math.random()*cheat.length);
       let idx3 = "With" + cheat[idx2];
       
    }
    return Love1;
}

function Salary(){
    let choice = process.argv[7]
    let salaries = Math.floor(Math.random()*1000000)-500000
    let idx = [salaries, choice];
    if (choice == undefined){
        idx.pop();
    }
    let random = Math.floor(Math.random() * idx.length);
    let money = idx[random]
    return money;
}
