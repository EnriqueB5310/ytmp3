const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const path = require('path')


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

app.get('/download', async (req,res) => {
  let URL = req.query.URL;
 



  await ytdl.getInfo(URL).then(info => {
    console.log(info.videoDetails.title);



    res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp3`);

    ytdl(URL, {
      format: 'mp4',
        filter: 'audioonly',
    }).pipe(res)
    })


  })

  app.get('/downloadmp4', async (req,res) => {
    let URL = req.query.URL;
   
  
  
  
    await ytdl.getInfo(URL).then(info => {  
      console.log(info.videoDetails.title);
  
  
  
      res.header('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4`);
  
      ytdl(URL, {
        format: 'mp4',
          
      }).pipe(res)
      })
  
  
    })
  
  
  
   
