let btn = document.getElementById('btn')

btn.addEventListener('click',function(e) {
    alert("Hello Tanishq")
    // var btn = e.target;
    // var btn_id = btn.dispatchEvent;
    // var btn_name = btn.textContent;
    // var btn_class = btn.className;
})

let a = prompt("What is your favourite numbers?")
if(a==2){
    btn.removeEventListener("click" , function(e) {})
}