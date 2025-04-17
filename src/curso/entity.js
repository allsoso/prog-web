import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Curso extends Model{}

Curso.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING,
        },
        descricao:{
            type:DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "Curso",
        tableName: "curso",
        timestamps: false
    }
)