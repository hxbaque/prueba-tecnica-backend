import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class SalaCine extends Model {
    
}

SalaCine.init({
    id_sala: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_sala',  
    },
    nombre: {
        type: DataTypes.STRING(255), 
        allowNull: false,
        field: 'nombre',  
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[0, 1]], 
        },
        field: 'estado',  
    },
}, {
    sequelize,
    tableName: 'sala_cine', 
    timestamps: false, 
});

export default SalaCine;
