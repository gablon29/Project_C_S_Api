require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { URL_DATABASE, DB_PASSWORD } = process.env;

const supabase = createClient(URL_DATABASE, DB_PASSWORD);

const insertAPredicas = async (newPreidcas) => {
    try {
        const { data, error } = await supabase
            .from('Predicas')
            .insert([newPreidcas])
            .select();
    } catch (error) {
        console.error(error)
    }
};

const createRowPredicas = async (req, res) => {
    try {
        const { id_pastores, titulo, ingresos, fecha } = req.body;
        const newRecord = insertAPredicas({ id_pastores, titulo, ingresos, fecha });
        res.status(201).send('<h1>Upload successful</h1>')
    } catch (error) {
        console.error(error)
    }
};
module.exports = {
    createRowPredicas
}