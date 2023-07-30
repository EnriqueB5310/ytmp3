const convertBtn = document.querySelector('.convert')
const Link = document.querySelector('.URL-input')


convertBtn.addEventListener('click' , () => {
    sendURL(Link.value)
})

function sendURL(URL) {
  window.location.href =`https://ytmp3-iqma.onrender.com/download?URL=${URL}`;

}
