import { DataTypes, Model} from "sequelize";
import User from "./user.js";


export default class ToDo extends Model { }

export const todoIniter = (sequelize) => {
    ToDo.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })

    return() =>{
        ToDo.belongsTo(User, {foreignKey: "userId", onDelete: "CASCADE"})
    }
}