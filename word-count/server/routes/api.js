const express = require('express')
const router = express.Router()

let wordCounter = {}

router.get('/sanity', function (req, res) {
    //gather info
    res.send("sanity")
})

router.get('/word/:word', function (req, res) {
    const word = req.params.word
    const wordCount = wordCounter[word]

    if (word in wordCounter)
        res.send({ count: wordCount })
    else
        res.send({ count: 0 })
})

router.post('/word', function (req, res) {
    const word = req.body.word

    if (word in wordCounter)
        wordCounter[word]++
    else
        wordCounter[word] = 1

    res.send({ text: `added ${word}`, count: wordCounter[word] })
})

router.post('/words/:string', function (req, res) {
    const stringArr = (req.params.string).split(' ')
    let newWords = 0
    let oldWords = 0
    stringArr.forEach(w => {
        if (w in wordCounter)
            oldWords++
        else {
            wordCounter[w] = 1
            newWords++
        }
    })
    res.send({ text: `added ${newWords}, ${oldWords} words already existed`, currentCount: -1 })
})

module.exports = router