const getMin = document.querySelector("#min")
const getAngka = document.querySelector("#angka")
const getPlus = document.querySelector("#plus")

getPlus.addEventListener("click", function () {
    if (getAngka.innerHTML <10) {
        getAngka.innerHTML ++
        
    }
   
})
getMin.addEventListener("click", function() {
    if (getAngka.innerHTML > 0) {
        getAngka.innerHTML--
        
    }
})   


const getbtn = document.getElementById("btn")
getbtn.addEventListener('click', function () {
    var inputvalue = document.getElementById('input').value;
console.log(inputvalue)
    if (inputvalue !== '') {
        var newListElement = document.createElement('li');
        newListElement.innerHTML = inputvalue;

        // ini untuk menghapus elemen yg kita clik
        newListElement.addEventListener("click", function(){
            this.parentNode.removeChild(this)
        })

        const getList= document.getElementById('list');
        getList.appendChild(newListElement)

        document.getElementById('input').value = '';

        
    }
})
document.getElementById('btnRemove').addEventListener('click', function(){
    var list = document.getElementById('list');

    // mengambil indeks elemen terakhir
    var lastIndex = list.children.length -1;

    // menghapus elemen terakhir dari daftar
    if (lastIndex >= 0) {
        list.removeChild(list.children[lastIndex]);
        
    }
})


