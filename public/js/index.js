

const mp3convert = document.querySelector('.mp3')
const Link = document.querySelector('.URL-input')
const mp4convert = document.querySelector('.mp4')

mp3convert.addEventListener('click' , () => {
    getMp3(Link.value)
})

mp4convert.addEventListener('click', () => {
getMp4(Link.value)

})

function getMp3(URL) {
  window.location.href =`https://ytmp3-iqma.onrender.com//download?URL=${URL}`;

}

function getMp4(URL) {
  window.location.href =`https://ytmp3-iqma.onrender.com//downloadmp4?URL=${URL}`;

}
