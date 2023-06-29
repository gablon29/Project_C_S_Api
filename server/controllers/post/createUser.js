require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const { URL_DATABASE, DB_PASSWORD } = process.env;
const opcionSupabase = {
    auth: {
        autorefreshToken: true,
        persistSession: false,
        detectSessionUrl: true
}
};

const supabase = createClient(URL_DATABASE, DB_PASSWORD, opcionSupabase);

const createUser = async (newUser) => {
        const { data, error } = await supabase
            .from('Pastores')
            .insert([newUser]);
    if (error) {
        console.error('Error inserting user', error);
    } else {
        console.log('User inserted succesfully', data);
    };
};

const insertUser = async (req, res) => {
    try {
        const { userName, email, last_name, dni, fecha_inicio } = req.body
        const isertNewUser = await createUser({ name: userName, email, last_name, dni, fecha_inicio });
        res.status(201).json(isertNewUser);
    } catch (error) {
        console.error(error)
    }
};


module.exports = {
    insertUser
}
        
