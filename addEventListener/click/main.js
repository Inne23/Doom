const getclick = document.querySelector("#btn")
getclick.innerHTML = "click"
const getkotaks = document.querySelector(".kotak")
getkotaks.style.backgroundColor = "red"


// ganti warna
getclick.addEventListener("click",  () => {
    const getkotak = document.querySelector(".kotak")

    console.log(getkotak.style.backgroundColor)
    if (getkotak.style.backgroundColor == "red") {
        getkotak.style.backgroundColor = "black"
        
    }  else if (getkotak.style.backgroundColor == "black") {
        getkotak.style.backgroundColor = "red"
        
    }
})