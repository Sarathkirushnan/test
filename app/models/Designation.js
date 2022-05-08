'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Designation extends Model {
		static associate(models) {
			Designation.hasMany(models.Employee, {
				foreignKey: 'designationId',
				as: 'employees',
			});
		}
	}
	Designation.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'designation',
			tableName: 'designation',
		}
	);
	return Designation;
};
