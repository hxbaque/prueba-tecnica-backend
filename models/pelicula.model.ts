import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";

class Pelicula extends Model {
  public id!: number;
  public nombre!: string;
  public duracion!: number;
}

Pelicula.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "ID_PELICULA",
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "NOMBRE",
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "DURACION",
    },
  },
  {
    sequelize,
    tableName: "PELICULA",
    timestamps: false,
  }
);

export default Pelicula;
