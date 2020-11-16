const something = require("./consts")
const handlers = require("./complaintsHandler")

let complaint1 = {
    text: "I'm not getting enough money",
    type: something.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: something.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: something.EMOTIONS
}

handlers.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
handlers.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
handlers.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."
