import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.render('home.ejs')
});


app.listen(port,(req,res)=>{
    console.log(`Server running at port http://localhost:${port}`)
});
