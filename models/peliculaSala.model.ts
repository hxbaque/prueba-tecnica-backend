import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";
import Pelicula from "./pelicula.model";
import SalaCine from "./salaCine.model";

class PeliculaSala extends Model {
  public id!: number;
  public fechaPublicacion!: Date;
  public fechaFin!: Date;
  public idSalaCine!: number;
  public idPelicula!: number;
}

PeliculaSala.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "ID_PELICULA_SALA",
    },
    fechaPublicacion: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "FECHA_PUBLICACION",
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "FECHA_FIN",
    },
    idSalaCine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "ID_SALA_CINE",
    },
    idPelicula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "ID_PELICULA",
    },
  },
  {
    sequelize,
    tableName: "PELICULA_SALACINE",
    timestamps: false,
  }
);

// Definir relaciones
PeliculaSala.belongsTo(Pelicula, { foreignKey: "ID_PELICULA", onDelete: "CASCADE" });
PeliculaSala.belongsTo(SalaCine, { foreignKey: "ID_SALA_CINE", onDelete: "CASCADE" });

export default PeliculaSala;