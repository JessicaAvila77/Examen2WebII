
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'agregados',
    'root',
    'root',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=> console.log('Se conecto exitosamente'))
    .catch(()=> console.log('Ocurrion un error'))

module.exports=sequelize;