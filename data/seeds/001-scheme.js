exports.seed = function(knex) {
  return knex('project_resources').truncate()
    .then(() => knex('tasks').truncate())
    .then(()=> knex('resources').truncate())
    .then(() => knex('projects').truncate())
    .then(() => {
      return knex('projects').insert([
        {id: 1, name: "Write Novel",description: "Novel will be nonfiction book on Theranos"},
        {id: 2, name: "Make Portfolio",description: "New portfolio from scratch"},
        {id: 3, name: "Prune Garden Shrubs",description: "Yearly Pruning"}
      ])
    })
    .then(()=> {
      return knex('resources').insert([
        {id: 1, name: "Pen", description: "HB"},
        {id: 2, name: "UX design", description: "For directing the layout"},
        {id: 3, name: "Palette", description: "an array of colors available"},
        {id: 4, name: "Planner", description: "8 by 16 canvas"},
        {id: 5, name: "Flowers", description: "For planting again"},
        {id: 6, name: "Shears", description: "To cut"},
        {id: 7, name: "Fertalizer", description: "To fertalize"},
        {id: 8, name: "Gloves", description: "For protecting hands"}
      ])
    })
    .then(()=> {
      return knex('project_resources').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 2, resource_id: 3},
        {project_id: 1, resource_id: 4},
        {project_id: 2, resource_id: 1},
        {project_id: 2, resource_id: 2},
        {project_id: 2, resource_id: 4},
        {project_id: 3, resource_id: 4},
        {project_id: 3, resource_id: 5},
        {project_id: 3, resource_id: 6},
        {project_id: 3, resource_id: 7},
        {project_id: 3, resource_id: 8}
      ])
    })
    .then(()=> {
      return knex('tasks').insert([
        {project_id: 1, description: "Make an outline for chapters", notes: "Keep it under 15 chapters"}, 
        {project_id: 1, description: "Schedule interviews", notes: "First, with the people with tips"},
        {project_id: 2, description: "Decide on how state will be managed", notes: "Leaning to using Context API"},
        {project_id: 3, description: "Design a plan", notes: "Leaning towards having flower bed around patio"},
        {project_id: 3, description: "Decide where to prune crepe mertyles", notes: "Would like to experiement"}
      ])
    })


};
