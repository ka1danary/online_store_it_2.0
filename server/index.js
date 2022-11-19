import {noRawAttributes} from "sequelize/lib/utils/deprecations";

require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

import {openConnection, closeConnection} from "./db";
import {runMigrations} from "./migration";

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

// const start = async () =>  {
//     try {
//         await sequelize.authenticate()
//         await sequelize.sync()
//         app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))
//     }
//     catch (e) {
//         console.log(e)
//         console.log('Невозможно выполнить подключение к БД: ', e)
//     }
// }
// start()

async function bootstrap() {
    try {
        await openConnection()
        await runMigrations()

        console.info('Connected')
    } catch (err) {
        console.error(err)
    }
}

bootstrap()