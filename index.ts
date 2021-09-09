import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/projects';
import { projectassigments } from './seeders/projectassigments';
const createUsers = () => {
    users.map(user =>{
        console.log(user);
        db.User.create(user);
    })
}

const createProjects = () =>{
    projects.map(project =>{
        console.log(project);
        db.Project.create(project);
    })
}

const createProjectAsigments = () =>{
    projectassigments.map(projectassigment=>{
        console.log(projectassigment);
        db.ProjectAssigment.create(projectassigment);
    })
}



//createProjectAsigments();
//createProjects();
//createUsers();


app.get('/', (req, res) =>{
    db.User.findAll({
        include:[{
            model: db.Project
        }]
    }).then((result: object) =>res.json(result)).catch((err:any)=>{
        res.json(err)
    })
    
})


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`app listening on port ${port}`);
    })
})