import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import SalaCine from './salaCine.model'; 
import Pelicula from './pelicula.model';

export class PeliculaSalaCine extends Model {

}

PeliculaSalaCine.init({
    id_pelicula_sala: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id_pelicula_sala',  
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_publicacion',  
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'fecha_fin',  
    },
    id_sala_cine: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: SalaCine,
            key: 'id_sala',  
        },
    },
    id_pelicula: {
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
    tableName: 'pelicula_salacine',  
    timestamps: false, 
});
PeliculaSalaCine.belongsTo(Pelicula, { foreignKey: 'id_pelicula' });
PeliculaSalaCine.belongsTo(SalaCine, { foreignKey: 'id_sala_cine' });
Pelicula.hasMany(PeliculaSalaCine, { foreignKey: 'id_pelicula' });
SalaCine.hasMany(PeliculaSalaCine, { foreignKey: 'id_sala_cine' });

export default PeliculaSalaCine;
