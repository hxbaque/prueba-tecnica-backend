import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class SalaCine extends Model {
    public id!: number;
    public nombre!: string;
    public estado!: number;
}

SalaCine.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_sala', 
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[0, 1]], // Valida que el estado sea 0 o 1
        },
    },
}, {
    sequelize,
    tableName: 'SALA_CINE',
    timestamps: false, // Si no necesitas campos de tiempo como createdAt y updatedAt
});

export default SalaCine;
