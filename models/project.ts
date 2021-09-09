'use strict';

import {
  Model, UUIDV4
} from 'sequelize';

interface ProjectInterface {
  id: string;
  title: string;
  status: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<ProjectInterface> implements ProjectInterface {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string; // Note that the `null assertion` `!` is required in strict mode.
    title!: string;
    status!:string

  
    static associate(models: any) {
      // define association here
      Project.belongsToMany(models.User, {
        through:'ProjectAssigments'
      })
    }
  };
  Project.init({
    id:{
      type:DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    title: { 
      type:DataTypes.STRING,
      allowNull: false
    },
    status: { 
      type:DataTypes.STRING,
      allowNull: false
    }
   }, 
   {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};