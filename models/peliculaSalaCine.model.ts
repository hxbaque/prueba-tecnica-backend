import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import SalaCine from './salaCine.model'; 
import Pelicula from './pelicula.model';

export class PeliculaSalaCine extends Model {
    public id!: number;
    public fechaPublicacion!: Date;
    public fechaFin!: Date;
    public idSalaCine!: number;
    public idPelicula!: number;
    public estado!: number; 
}

PeliculaSalaCine.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fechaPublicacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    fechaFin: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idSalaCine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: SalaCine,
            key: 'id_sala', 
        },
    },
    idPelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pelicula,
            key: 'id_pelicula', 
        },
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isIn: [[0, 1]], 
        },
        defaultValue: 1, 
    },
}, {
    sequelize,
    tableName: 'PELICULA_SALACINE',
    timestamps: false, 
});

export default PeliculaSalaCine;
