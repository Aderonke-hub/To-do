let arr = [];
let input1 = document.getElementById('input1');
let ram = document.getElementById('ram');
function add() {
    arr.push(input1.value)
    ram.innerHTML = ""
    input1.innerHTML = ""
    for (index = 0; index < arr.length; index++){
                ram.innerHTML+=`<div class="divv">
                <div><p>${index+1}</p></div>
                 <div><p>${arr[index]}<p/></div>
                 <button id="btn1" onclick="del(${index})"> DELETE</button>
                 </div>`
    }
    input1.value = ""
}


function del(index) {
    arr.splice(index, 1)
    ram.innerHTML = ""
    for (index = 0; index < arr.length; index++){
        ram.innerHTML+=`<div class="divv">
                 <div class="Div"><p>${index+1}</p></div>
                 <div class="Div"><p>${arr[index]}<p/></div>
                 <button id="btn1" onclick="del(${index})"> DELETE</button>
                 </div>`

       
    }
}
