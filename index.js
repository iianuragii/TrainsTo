const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
require('dotenv').config()

app.set('view engine','ejs');

app.set( 'views'+__dirname+'/views');

app.get('/',(req,res)=>{
  res.render('interface',{ title: 'TrainsTo', num:'31525'});  
})

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v1/getTrainSchedule',
  params: {trainNo: '31525'},
  headers: {
    'X-RapidAPI-Key': process.env.SECRET_KEY,
    'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
  }
};


const fetch = async () =>{
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetch();

app.listen(PORT, () =>`Server is running on port ${PORT}`)