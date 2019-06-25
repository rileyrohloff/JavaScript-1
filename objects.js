// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

//1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
    "id": 0,
    "name": "Example",
    "email": "examples@you.edu",
    "gender": "F"
}

// Write your intern objects here:
class Intern {
    constructor(ID, name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender
        this._ID = ID
    }
    get name() {
        return this._name
    }
    get ID() {
        return this._ID
    }
    get email() {
        return this._email
    }
    get gender() {
        return this._gender
    }
}


const mit = new Intern(1, 'Mitzi', 'mmelloy0@psu.edu', 'F');
const ken = new Intern(2, 'Kennan', 'kdiben1@psu.edu', 'M');
const kev = new Intern(3, 'Keven', 'kmummery2@psu.edu', 'M');
const gannie = new Intern(4, 'Gannie', 'gmartinson3@psu.edu', 'F');
const anty = new Intern(5, 'Antonietta', 'adaine5@psu.edu', 'F');


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mit.name)
    // Kennan's ID
console.log(ken.ID)
    // Keven's email
console.log(kev.email)
    // Gannie's name
console.log(gannie.name)
    // Antonietta's Gender
console.log(anty.gender)



// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
ken.speak = () => {
    return "Hello, my name is Kennan!"
};
console.log(ken.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

anty.multiplyNums = (num1, num2) => {
    return num1 * num2
};


console.log(anty.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

//const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak