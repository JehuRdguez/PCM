//PRIMERO QUE NADA, ACTUALICEN LA BDD EN EL pgadmin CON LA BASE DE DATOS DENTRO DE LA CARPETA LLAMADA "BDD"

//EJECUTAN PRIMERO ESTO
//npm install
//npm install jspdf jspdf-autotable
//npm install --save express
//npm install --save pg
//npm install --save pg-hstore
//npm install --save body-parser
//npm install cors --save
//npm install crypto-js
//npm i --save crypto-js @types/crypto-js



//REINICIEN VISUAL STUDIO CODE

//CUANDO VUELVA A ABRIR EJECUTAN LO SIGUIENTE:
//ng serve
//node index.js

//LUEGO PUEDEN ENTRAR COMO ADMIN CON ESTAS CREDENCIALES:
//No. Trabajador: 20210081
//Contraseña: contra123

//NOTAAAAAAA IMPORTANTE: UNA VEZ DENTRO YA PUEDEN EJECUTAR JSON SERVER, PERO ANTES HAGAN CONTROL+C EN LA CONEXIÓN DE "node index.js", PORQUE SI NO TIRA ERROR, YA QUE LAS 2 ESTÁN EN EL PUERTO 3000
//json-server --watch db.json
//SOLO USENLO PARA PRUEBAS, LO IDEAL SERÍA SEGUIR TRABAJANDO CON POSTGRESQL CON EL "node index.js"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.get('/',(request, response)=>{
    response.json({info:'Node.js, Express, API in Postgres'})
})

// metodos de la tabla bitacora
app.get('/bitacora',db.ObtencionRegistro)
app.get('/bitacora/:id',db.ObtencionRegistroPorId)
app.post('/bitacora',db.crearRegistro)
app.put('/bitacora/:id',db.actualizarRegistro)
app.delete('/bitacora/:id',db.eliminarRegistro)

// metodos de la tabla mantpreventivos
app.get('/mantpreventivo',db.getMantPrev)
app.get('/mantpreventivo/:id',db.getMantPrevPorId)
app.post('/mantpreventivo',db.crearMantPrev)
app.put('/mantpreventivo/:id',db.actualizarMantPrev)
app.delete('/mantpreventivo/:id',db.eliminarMantPrev)

// metodos de la tabla mantenimiento
app.get('/mantenimiento',db.getMantenimiento)
app.get('/mantenimiento/:id',db.getMantenimientoPorId)
app.post('/mantenimiento',db.crearMantenimiento)
app.put('/mantenimiento/:id',db.actualizarMantenimiento)
app.delete('/mantenimiento/:id',db.eliminarMantenimiento)

// metodos de la tabla
app.get('/piezas',db.getPiezas)
app.get('/piezas/:id',db.getPiezasPorId)
app.post('/piezas',db.crearPiezas)
app.put('/piezas/:id',db.actualizarPiezas)
app.delete('/piezas/:id',db.eliminarPiezas)

// metodos de sistema
app.get('/sistema',db.getSistema)
app.get('/sistema/:id',db.getSistemaPorId)
app.post('/sistema',db.crearSistema)
app.put('/sistema/:id',db.actualizarSistema)
app.delete('/sistema/:id',db.eliminarSistema)

// metodos de subsistema
app.get('/subsistema',db.getSubsistema)
app.get('/subsistema/:id',db.getSubsistemaPorId)
app.post('/subsistema',db.crearSubsistema)
app.put('/subsistema/:id',db.actualizarSubsistema)
app.delete('/subsistema/:id',db.eliminarSubsistema)

// metodos de tipo reporte
app.get('/tiporeporte',db.getTipoReporte)
app.get('/tiporeporte/:id',db.getTipoReportePorId)
app.post('/tiporeporte',db.crearTipoReporte)
app.put('/tiporeporte/:id',db.actualizarTipoReporte)
app.delete('/tiporeporte/:id',db.eliminarTipoReporte)

// metodos de tipo usuario
app.get('/tipousuario',db.getTipousuario)
app.get('/tipousuario/:id',db.getTipousuarioPorId)
app.post('/tipousuario',db.crearTipousuario)
app.put('/tipousuario/:id',db.actualizarTipousuario)
app.delete('/tipousuario/:id',db.eliminarTipousuario)

// metodos de tipo unidad
app.get('/unidad',db.getUnidad)
app.get('/unidad/:id',db.getUnidadPorId)
app.post('/unidad',db.crearUnidad)
app.put('/unidad/:id',db.actualizarUnidad)
app.delete('/unidad/:id',db.eliminarUnidad)

// metodos de tipo unidad
app.get('/unidaddenegocios',db.getUnidadNegocios)
app.get('/unidaddenegocios/:id',db.getUnidadNegociosPorId)
app.post('/unidaddenegocios',db.crearUnidadNegocios)
app.put('/unidaddenegocios/:id',db.actualizarUnidadNegocios)
app.delete('/unidaddenegocios/:id',db.eliminarUnidadNegocios)

// metodos de usuario
app.get('/usuario',db.getUsuario)
app.get('/usuario/:enumtrabajador',db.getUsuarioPorId)
app.post('/usuario',db.crearUsuario)
app.put('/usuario/:id',db.actualizarUsuario)
app.delete('/usuario/:id',db.eliminarUsuario)

// metodos de Kpis
app.get('/kpis',db.getKpis)
app.get('/kpis/:id',db.getKpisPorId)
app.post('/kpis',db.crearKpis)
app.put('/kpis/:id',db.actualizarKpis)
app.delete('/kpis/:id',db.eliminarKpis)

app.listen(port, ()=>{console.log(`APP running in port ${port}.`)
})

