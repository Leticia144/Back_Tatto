import express from ' express'
import dotenv from 'dotenv'
import homeRoutes from './routers/Home.Routes.js'

dotenv.config()

class App {
    constructor(){
        this.app = express()
        this.middleawares()
        this.routes()
    }

middleawares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({
        extend: true}))
}

}
export default new App().app
