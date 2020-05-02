const router = require('express').Router()
const Tasks = require('../models/tasks-model.js')
const Projects = require('../models/projects-model.js')


router.get('/', (req,res) => {
    Tasks.get()
        .then(allTasks => {
            const newTasks = []
            allTasks.forEach((task) => {
                if(task.completed == 0){
                 task = {...task, completed: false}
                 newTasks.push(task)
                }
                else{
                    task = {...task, completed: true}
                    newTasks.push(task)
                }
            })
            res.status(200).json(newTasks)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting tasks! `})
        })
})

router.post('/:id', validateProjectId, (req,res) => {
    const { description, notes } = req.body;
    Tasks.add({ project_id: req.params.id, description, notes })
        .then(newTask => {
            if(newTask.completed == 0){
                res.status(200).json({...newTask, completed: false})
            }
            else{
                res.status(200).json({...newTask, completed: true})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new task! `})
        })

})

async function validateProjectId(req, res, next) {
    const { id } = req.params;
    try {
      const project = await Projects.getById(id);
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(400).json({ message: "Invalid project ID." });
      }
    } 
    catch (error) {
      res
        .status(500)
        .json({ message: "There was an error validating that project." });
    }
  }


module.exports = router;