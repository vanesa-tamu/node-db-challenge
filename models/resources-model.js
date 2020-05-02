const db = require('../data/dbconfig.js')
module.exports = {
    get,
    getById,
    add
}

function get(){
    return db('resources');
}

function getById(id){
    return get().where({ id }).first();
}

function add(newResource) {
    return db('resources')
        .insert(newResource, 'id')
        .then(([id]) => getById(id));
}