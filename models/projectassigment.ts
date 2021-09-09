'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

interface ProjectAssigmentInterface {
  ProjectId: string;
  UserId :string
}
module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssigment extends Model<ProjectAssigmentInterface> implements ProjectAssigmentInterface {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ProjectId!: string;
    UserId!:string;

    static associate(models: any) {
      // define association here
    }
  };
  ProjectAssigment.init({
    ProjectId: {
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    UserId:{
      type:DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ProjectAssigment',
  });
  return ProjectAssigment;
};