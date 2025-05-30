import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Chat = sequelize.define("Chat", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
});

export default Chat;
