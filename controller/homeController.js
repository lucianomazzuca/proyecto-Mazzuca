const dbConcesionaria = require('../dbConcesionaria');


const homeController = {
    index: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.write('Bienvenido a nuestra página!');
        res.write('\n------------------------------');
        res.write('\n\nNuestras sucursales son: \n\n');
        //Mostrar sucursales
        dbConcesionaria.forEach((concesionaria)=>{
            res.write(` -${concesionaria.sucursal}\n`);
        })
        res.end();
    },
    
}

module.exports = homeController;

// res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })