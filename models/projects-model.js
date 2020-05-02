const db = require('../data/dbconfig.js')
module.exports = {
    get,
    add,
    getById
}


function get(){
    return db('projects');
}

function getById(id){
    return get().where({ id }).first();
}

function add(project) {
    return db('projects')
        .insert(project, 'id')
        .then(([id]) => getById(id));
}

