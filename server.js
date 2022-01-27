import express, { Router } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


//component

import connection from './database/db.js';
import router from './routes/routes.js';
//default Data import
import defaultData from './default.js';
import { v4 as uuid } from 'uuid';

//wasif mohammad khan
dotenv.config(); 
const app = express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.use('/',router);

//local to global 
const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const passsword = process.env.DB_PASSWORD;


//connection(username,passsword);
const URL =`mongodb+srv://${username}:${passsword}@cluster0.0q4ne.mongodb.net/Cluster0?retryWrites=true&w=majority`;
connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}


app.listen(PORT,() => console.log(`server is running sucessfully on PORT ${PORT} `));


//dafault data to database 
defaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

export let paytmParams = {};
paytmParams ['MID'] = process.env.PAYTM_MID;
paytmParams ['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams ['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams ['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams ['ORDER_ID'] = uuid();
paytmParams ['CUST_ID'] =  process.env.PAYTM_CUST_ID;
paytmParams ['TXN_AMOUNT'] = '100';
paytmParams ['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams ['EMAIL'] = 'wasifstarzed@gmail.com';
paytmParams ['MOBILE_NO'] = '1234567898';


