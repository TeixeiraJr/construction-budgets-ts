import path from 'path';
import dotenv from 'dotenv';
import { DataSource } from "typeorm"

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});

const AppDataSource = new DataSource({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'construction',
    password: 'construction',
    database: 'construction',
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})

export default AppDataSource;