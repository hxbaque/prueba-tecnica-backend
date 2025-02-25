import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";

class SalaCine extends Model {
  public id!: number;
  public nombre!: string;
  public estado!: number;
}

SalaCine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: "ID_SALA",
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "NOMBRE",
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "ESTADO",
    },
  },
  {
    sequelize,
    tableName: "SALA_CINE",
    timestamps: false,
  }
);

export default SalaCine;
