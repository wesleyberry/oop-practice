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

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     static countUsers() {
//         console.log(`There are 50 users.`);
//     }

//     register() {
//         console.log(`${this.username} is now registered.`);
//     }
// }

// let bob = new User('Bob1', 'bob@bob.com', 'bob123');
// bob.register();

// class Member extends User {
//     constructor(username, email, password, memberPackage) {
//         super(username, email, password);
//         this.package = memberPackage;
//     }

//     getPackage() {
//         console.log(`${this.username} is subscribed to the ${this.package} package.`)
//     }
// }

// let mike = new Member('Mike', 'mike@mike.com', 'password', 'Standard');
// mike.getPackage();
// mike.register();

// class className {
//     constructor(type, roomNum, professor) {
//         this.type = type;
//         this.roomNum = roomNum;
//         this.professor = professor;
//     }

//     tellRoomNum() {
//         console.log(`This is room #${this.roomNum}`);
//     }

//     changeRoomNum(newNum) {
//         this.roomNum = newNum;
//         console.log(`The new room number is #${this.roomNum}`);
//     }
// }

// let class1 = new className('English', 224, 'Wazowski');
// class1.tellRoomNum();
// class1.changeRoomNum(240);
// class1.tellRoomNum();

// ------------------------------------

// function Player(name, favGame) {
//     this.name = name,
//     this.favGame = favGame,
//     this.play = function() {
//         console.log(`${this.name} is playing ${this.favGame}`);
//     }
//     this.newFavGame = function(newGame) {
//         this.favGame = newGame;
//         console.log(`${this.name}'s new favorite game is ${this.favGame}`);
//     }
// }

// let player1 = new Player('John', 'Call of Duty');
// player1.play();
// player1.newFavGame('Mario Cart');

// -------------------------------------------

class classDetails {
    constructor(study, roomNum, professor) {
        this.study = study;
        this.roomNum = roomNum;
        this.professor = professor;
    }

    getClassName() {
        console.log(`Dr. ${this.professor} teaches ${this.study} in room #${this.roomNum}`);
    }
}

let class1 = new classDetails('English', 400, 'Zelinski');
class1.getClassName();


function Student(name, age, study) {
    this.name = name,
    this.age = age;
    this.study = study;

    this.studyBooks = function() {
        console.log(`${this.name} is studying ${study}`);
    }
}

let bob = new Student('Bob', 20, 'Computer Science');
bob.studyBooks();