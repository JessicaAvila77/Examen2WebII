

const express = require('express')
const cors= require('cors')
const sequelize = require('./db/Conexion')
const Producto = require('./Models/Producto')

const app = express()

app.use(express.json())

app.use(cors())

// Calcular el valor promedio de productos por cada categoryCode
//select AVG(value), `category.code` from productos group by `category.code`;

app.get('/prom-value-category', async(req, resp)=>{

    try {
            const result = await Producto.findAll({
                attributes:[
                    'categorycode',
                    [sequelize.fn('AVG', sequelize.col('VALUE')),'prom_value']
                ],
                group:['categorycode']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
})
//#Contar el número de productos por marca (brand.code)
//select count(*), `brand.code` from productos group by `brand.code`;

app.get('/count-prod-brand', async(req, resp)=>{

    try {
            const result = await Producto.findAll({
                attributes:[
                    'brandcode',
                    [sequelize.fn('COUNT', sequelize.col('*')),'cant_prod']
                ],
                group:['brandcode']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
})

//#Calcular el valor total de productos por categoria
//Select SUM(value), `category.code` from productos group by `category.code`;

app.get('/sum-value-category', async(req, resp)=>{

    try {
        const result = await Producto.findAll({

            attributes:[
                'categorycode',
                [sequelize.fn('SUM', sequelize.col('value')),'sum_category']
            ],
            group:['categorycode']

        })

        resp.json(result)

} catch (error) {
    resp.status(500).send({'Mensaje':'Ocurrio un error'})
}
});




app.listen(5000, ()=>{
    console.log('Aplicacion ejecutando en puerto 5000')
})
