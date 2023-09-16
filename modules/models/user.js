import { DataTypes, Model} from "sequelize";
import ToDo from "./todo.js";


export default class User extends Model { }

export const userIniter = (sequelize) => {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        secondName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        login:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return() =>{
        User.hasMany(ToDo, {foreignKey: "userId", onDelete: "CASCADE"})
    }
}