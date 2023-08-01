const convertBtn = document.querySelector('.convert')
const Link = document.querySelector('.URL-input')
const mp4convert = document.querySelector('.mp4')

convertBtn.addEventListener('click' , () => {
    sendURL(Link.value)
})


mp4convert.addEventListener('click', () => {
getMp4(Link.value)

})

function sendURL(URL) {
  window.location.href =`https://ytmp3-iqma.onrender.com/download?URL=${URL}`;

}


function getMp4(URL) {
  window.location.href =`https://ytmp3-iqma.onrender.com/downloadmp4?URL=${URL}`;

}
