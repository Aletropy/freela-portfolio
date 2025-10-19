import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Task extends Model {
    public id! : number
    public title! : string
    public description? : string
    public done! : boolean
}

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    tableName: 'tasks'
})

export default Task