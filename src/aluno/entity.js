import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export class Aluno extends Model{}

Aluno.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING,
        },
        matricula:{
            type:DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "Aluno",
        tableName: "aluno",
        timestamps: false
    }
)