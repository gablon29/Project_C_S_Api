require('dotenv').config(); 
const { Sequelize } = require('sequelize');
const { DB_PASSWORD_SUPABASE } = process.env

const sequelize = new Sequelize(`postgres://postgres:${DB_PASSWORD_SUPABASE}@db.ptrqdncupzjdfyxbwxrp.supabase.co:6543/postgres`, {
    logging: false,
    dialect: 'postgres'
});

module.exports = {
    sequelize
}