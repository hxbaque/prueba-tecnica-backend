import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Pelicula extends Model {

}

Pelicula.init(
  {
    id_pelicula: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[0, 1]], 
      },
      defaultValue: 1, 
    },
  },
  {
    sequelize,
    tableName: 'pelicula',
    timestamps: false, 
  }
);

export default Pelicula;
