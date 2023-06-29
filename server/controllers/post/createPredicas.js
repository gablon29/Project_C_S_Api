require('dotenv').config();
const { supabase } = require('../../supabaseConfig');

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