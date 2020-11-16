const whatup = require("./consts")

const handleComplaints = function(complaint){
    if(complaint.type === whatup.FINANCE)
    console.log(complaint.text + ",money doesnt grow on tree")
    if(complaint.type === whatup.WEATHER)
    console.log(complaint.text + ",money doesnt grow on tree")
    if(complaint.type === whatup.EMOTIONS)
    console.log(complaint.text + ",It'll pass, as all things do, with time.")
}

module.exports.handleComplaints = handleComplaints