const router = require('express').Router()
const Projects = require('../models/projects-model.js')


router.get('/', (req,res) => {
    Projects.get()
        .then(projects => {
            const newProjects = []
            projects.forEach((project) => {
                if(project.completed == 0){
                project = {...project, completed: false}
                 newProjects.push(project)
                }
                else{
                    project = {...project, completed: true}
                    newProjects.push(project)
                }
            })
            res.status(200).json(newProjects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error retrieving all projects`})
        })
})

router.post('/', (req,res) => {
    const { name, description } = req.body
    Projects.add({ name, description })
        .then(newProject => {
            if(newProject.completed == 0){
                res.status(200).json({...newProject, completed: false})
            }
            else{
                res.status(200).json({...newProject, completed: true})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new project! `})
        });
})

module.exports = router;