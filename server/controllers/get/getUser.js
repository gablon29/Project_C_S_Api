require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { URL_DATABASE, DB_PASSWORD } = process.env;

const supabase = createClient(URL_DATABASE, DB_PASSWORD);

const getUsers = async () => {
    const { data: Pastores, error } = await supabase
    .from('Pastores')
    .select('*');
    if(error) {
        dataUser = error
        console.error(`error al traer los datos ${dataUser}`);
    } else {
        let dataUser = data;
        console.log(data)
        return dataUser;
    }
};

const showUsers = async (req, res) => {
    try {
        const data = null;
        const users = getUsers(data);
        res.status(201).json(users);
    } catch (error) {
        console.error(error);
    };
};
module.exports = {
    showUsers
}