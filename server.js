const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.listen(4000, () => {
    console.log("Server Listening on 4000")
})

app.get('/download', (req,res) => {
    let URL = req.query.URL;
  res.header('Content-Disposition', 'attatchment; filename="video.mp3');

  ytdl(URL, {
    format: 'mp3'
  }).pipe(res)
})