// const obj = {
//     key: 'cat',
//     legs: 4,
//     name: 'Sully',
//     meow: function() {
//         console.log('Meow!');
//     }
// };

// obj.meow();
// --------------------------------------------------
// function animalMaker(type, legs, name) {
//     this.type = type,
//     this.legs = legs,
//     this.name = name,
//     this.makeNoise = function() {
//         console.log('Arf... Meow?');
//     }
// }

// let dog = new animalMaker('dog', 4, 'Riley');
// dog.makeNoise();

// --------------------------------------------------

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log(`There are 50 users.`);
    }

    register() {
        console.log(`${this.username} is now registered.`);
    }
}

let bob = new User('Bob1', 'bob@bob.com', 'bob123');
bob.register();

class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.package} package.`)
    }
}

let mike = new Member('Mike', 'mike@mike.com', 'password', 'Standard');
// mike.getPackage();
mike.register();