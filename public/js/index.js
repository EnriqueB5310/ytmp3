const convertBtn = document.querySelector('.convert')
const Link = document.querySelector('.URL-input')


convertBtn.addEventListener('click' , () => {
    sendURL(Link.value)
})

function sendURL(URL) {
  window.location.href =`http://localhost:4000/download?URL=${URL}`;

}
