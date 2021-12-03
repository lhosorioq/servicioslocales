import mongoose from "mongoose";

const uri =
    'mmongodb+srv://gestionadmin:G3st10nD1n3r0@gestiondinero.kvajf.mongodb.net/directorio_emprendedores?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Conectar DB gestiondinero
(async () => {
    const db = await mongoose.connect(uri, options);
    console.log('Conectado a DB', db.connection.name);
})();

