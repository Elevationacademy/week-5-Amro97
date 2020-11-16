const functions = require("./node_modules/validator/index.js")
const faker = require("./node_modules/faker/index.js")

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(functions.isEmail("shoobert@dylan"))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(functions.isMobilePhone("786-329-9958", 'en-US'))
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

console.log(functions.blacklist(text, blacklist))

//-------------------------------------------------------------
const makeHuman = function(humans){
    for(let k=0; k < humans; k++){
       console.log(faker.name.findName())
       console.log(faker.image.people())
       console.log(faker.address.city())
       console.log(faker.address.country())

    }
}
makeHuman(2) //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe