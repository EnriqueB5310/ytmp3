const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const path = require('path')
const PORT = 'https://ytmp3-iqma.onrender.com'

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, 'public')))



app.listen(4000, () => {
    console.log("Server Listening on 4000")
})

app.get('/', (req,res) => {
  res.redirect('index.html')
})

app.get('/download', (req,res) => {
    let URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp3"');

  ytdl(URL, {
    format: 'mp3'
  }).pipe(res)
})
