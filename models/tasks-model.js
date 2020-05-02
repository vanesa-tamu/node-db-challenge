const db = require('../data/dbconfig.js')
module.exports = {
    get,
    getById,
    add
}

function get(){
    return db('tasks as t')
        .select(['t.id as task_id','t.description as task_description', 't.notes', 't.project_id', 'p.name as project_name', 'p.description as project_description','t.completed'])
        .join('projects as p', 't.project_id', 'p.id')
}

function getById(id){
    return get().where({ task_id: id }).first();
}

function add(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(([id]) => getById(id));
}