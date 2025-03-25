
use agregados;

select * from productos;

describe productos;


# Calcular el valor promedio de productos por cada categoryCode

select * from productos;

Select AVG(value), `category.code` from productos group by `category.code`;

#Contar el número de productos por marca (brand.code)

select * from productos;

select count(*), `brand.code` from productos group by `brand.code`;


#Calcular el valor total de productos por categoria

select * from productos;

Select SUM(value), `category.code` from productos group by `category.code`;

