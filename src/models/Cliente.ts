import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Cliente extends Model {}

Cliente.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  fechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Cliente',
  tableName: 'Personas'
});

export default Cliente;