import app from "./app";
import './database/database'

app.listen(app.get('port'), () => { 
    console.log('Servidor Directorio Emprendedores En Puerto: ' + app.get('port'));
})