const getalert = document.querySelector("#btn")
getalert.addEventListener("click", function (){
    alert("welcome!!!")
})

const getconfirm = document.querySelector("#btnconfirm")
getconfirm.addEventListener("click", function (){
  const getconfirm = confirm ("apakah kamu seorang mahasiswa?") 

    if (getconfirm == true) {
        alert("kamu seorang mahasiswa")
    }else if (getconfirm == false) {
        alert("kamu bukan seorang mahasiswa")
    }
})

const getprint = document.querySelector("#btnprint")
getprint.addEventListener("click", function (){
    print()
})
