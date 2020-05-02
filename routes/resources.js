const router = require('express').Router()
const Resources = require('../models/resources-model.js')


router.get('/', (req,res) => {
    Resources.get()
        .then(allresources => {
            res.status(200).json(allresources);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting all resources!`})
        })
})


router.post('/', (req,res) => {
    const { name, description } = req.body
    Resources.add({ name, description })
        .then(newResource => {
            res.status(200).json(newResource);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new resource! `})
        });
})


module.exports = router;