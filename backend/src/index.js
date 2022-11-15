import app from "./app";
import {config as dotenv} from 'dotenv';


app.listen((process.env.PORT || 3000), function(){
    console.log('listening on *:3000');
})

