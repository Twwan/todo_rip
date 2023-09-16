import myRouter from "./modules/todo/router.js";
import Server from "./core/server.js";
import DatabaseAdapter from "./core/db_adapter.js";
import { Sequelize } from "sequelize";
import modelList from "./modules/models/_index.js";
import Routing from "./core/router.js";
import UserRouter from "./modules/user/router.js"

const APP_PORT = process.env.PORT || 8080
const GLOBAL_PREFIX = process.env.GLOBAL_PREFIX || ""

new Server(APP_PORT, [
    new DatabaseAdapter(
        new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
            dialect: "postgres",
            host: process.env.DB_HOST || "localhost",
            port: process.env.DB_PORT || "5432",
            logging: false,
            sync: {alter: true}
        })
    ).registerModels([... modelList]),
    new Routing(GLOBAL_PREFIX, [
        {router: myRouter, prefix: ""},
        {router: UserRouter, prefix: "/profile"}
    ])
])
.initServices().then((server) => server.run(() => console.log(`Server started on port: ${APP_PORT}`)))
