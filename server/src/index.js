import app from "./app";
import './database/database'

app.listen(app.get('port'), () => { 
    console.log('Servidor Servicios  Locales En Puerto: ' + app.get('port'));
})