import { Sequelize } from "sequelize";

const sequelize = new Sequelize("chatdb", "root", "student", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
