// const demo = document.querySelector("#demo")

// demo.innerHTML = "Inne"

// const getbyid = document.getElementById("get-by-id")
// getbyid.innerHTML = "berhasil get elemen get-by-id"

// const getbyclass= document.getElementsByClassName("get-by-class")
// for (let index = 0; index < getbyclass.length; index++) {
//     getbyclass[index].innerHTML ="berhasil get elemen by class"
// }

const getdemo = document.getElementById("demo")
getdemo.innerHTML = "lagi"
getdemo.className = "color"
getdemo.style.color = "yellow"
getdemo.style.fontSize = "100px"
getdemo.style.fontWeight = "bold"

const createloading= document.createElement("div")
createloading.innerHTML = "loading"
createloading.style.color= "red"
getdemo.appendChild(createloading)

