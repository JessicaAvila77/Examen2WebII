const { DataTypes } = require('sequelize')
const sequelize = require('../db/Conexion')

const Producto = sequelize.define('productos',{

        partNumber :{
            type: DataTypes.STRING
        },        
        productType:{
            type: DataTypes.STRING
        },
        categorycode:{
            type: DataTypes.STRING,
            field: 'category.code'
        },

        brandcode:{
            type: DataTypes.STRING,
            field: 'brand.code'
        },

        familycode:{
            type: DataTypes.STRING,
            field: 'family.code'
        },

        linecode:{
            type: DataTypes.STRING,
            field: 'line.code'
        },
        productSegmentCode: {
            type: DataTypes.STRING,
            field: 'productSegment.code',
        },
        status: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.DOUBLE,
        },
        valueCurrency: {
            type: DataTypes.STRING,
        },
        defaultQuantityUnits: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        plannerCode: {
            type: DataTypes.STRING,
        },
        sourceLink: {
            type: DataTypes.STRING,       
        }
        
    },
    {
        tableName:'productos',
        timestamps:false
    }

);

module.exports=Producto;