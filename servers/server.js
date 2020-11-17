const express = require('express')
const app = express()
const path = require('path')
const { stringify } = require('querystring')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(req, res){
    const name = req.params.name
    let newObj = {price: "ok"}
    for (let i of store){
        if (i.name == name){
            newObj = {price: i.price}
            break
        }
        else{
            newObj = {price: null}
        }
    }
    res.send(newObj)
})

app.get('/buy/:name', function(req, res){
    const name = req.params.name
    for (let item of store){
        if(item.name == name){
            item.inventory--
            res.send(item)
        }
    }
    //res.send(store)
})

const port = 3000
app.listen(port, function(){
    console.log("Server is running on port "+port)
})