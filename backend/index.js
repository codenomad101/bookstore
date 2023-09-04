import express from 'express';
import { PORT,mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book  } from './models/bookModel.js';
import router from './bookRoutes/Bookrouter.js';
import cors from 'cors';
const app=express();
app.use(express.json());  

app.use(cors());
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }));

app.get('/',(request, response)=>{
console.log(request);
return  response.status(234).send("welcome to mern stack");
})

app.use('/books',router);

  
mongoose.connect(mongoDBURL).then(()=>{
console.log('app connected to database')
    app.listen(PORT,()=>{
        console.log(`App is running at :${PORT}`)
    })
}).catch((error)=>{
console.log(error)
})