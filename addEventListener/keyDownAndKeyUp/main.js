const getinput = document.querySelector("#input")

getinput.addEventListener("keyup", function () {
    const gettext = document.querySelector("#text")
    const getkotak = document.querySelector(".kotak")

    // ini untuk ubah ukuran
    getkotak.style.height = getinput.value + "px"
    getkotak.style.width = getinput.value + "px"


    // ini untuk ubah warna dengan mengkomen ubah ukuran
    // getkotak.style.backgroundColor = getinput.value
    // gettext.innerHTML = getinput.value
})
