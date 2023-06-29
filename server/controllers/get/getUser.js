require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { URL_DATABASE, DB_PASSWORD } = process.env;
const opcionSupabase = {
    auth: {
    persistSession: false
}
};
const supabase = createClient(URL_DATABASE, DB_PASSWORD, opcionSupabase);


const getUsers = async () => {
    const { data, error } = await supabase
    .from('Pastores')
    .select('*');
    console.log(data)
};

// const showUsers = async (req, res) => {
//     try {
//         const data = null;
//         const users = getUsers(data);
//         res.status(201).json(users);
//     } catch (error) {
//         console.error(error);
//     };
// };
module.exports = {
    getUsers
}