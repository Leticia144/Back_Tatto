import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import usuariosRouters from './routers/Usuario.Routes.js'
import homeRoutes from './routers/Home.Routes.js'
import './database/ModelConnection.js';

dotenv.config()

class App {
    constructor(){
        this.app = express()
        this.middleawares()
        this.routes()
    }

middleawares(){
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({
        extend: true}))
}


    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/usuario', usuariosRouters);
    }





}
export default new App().app
