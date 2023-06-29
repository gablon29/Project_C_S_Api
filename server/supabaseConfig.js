const { createClient } = require('@supabase/supabase-js');
const { URL_DATABASE, DB_PASSWORD } = process.env;
const supabaseConfig = {
    auth: {
        persistSession: false
    }
};
const supabase = createClient(URL_DATABASE, DB_PASSWORD, supabaseConfig);

module.exports = {
    supabase
}