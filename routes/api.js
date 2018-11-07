
const router = require('express').Router()
const {User} = require ('../models/user')


router.post('/addname', async(req, res) => {
    try{
        const myData = new User(req.body)       
        console.log(`req.body => ${req.body}`)
        const doc = await myData.save()
        console.log('doc => ', doc)
        res.send('item saved to database' +doc)
    }
    catch(e){
        res.status(400).send(`unable to save to database ${e}`)
    }
})

router.get('/list', async(req,res) => {
    try{
        const doc = await User.find()
        res.send(doc)
    }
    catch(e){
        res.status(400).send(`Error to list names ${e}`)
    }
})


module.exports = router