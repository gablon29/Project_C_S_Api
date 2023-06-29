require('dotenv').config();
const { supabase } = require('../../supabaseConfig');

const getUsers = async () => {
    try {
        const { data, error } = await supabase
            .from('Pastores')
            .select('*');
        if (error) {
            throw new Error(`error al traer los datos ${error}`);
        }
        const users = data
        return users;
    } catch (error) {
        console.error('Error en buscar', error.message)
    }
};
        

const showUsers = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(201).json(users);
    } catch (error) {
        console.error(error);
    };
};
module.exports = {
    showUsers
}