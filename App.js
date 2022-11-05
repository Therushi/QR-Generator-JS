
// let url = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=100x100`

const inputText = document.querySelector("#input");
const button = document.querySelector("#submit");
const img = document.querySelector("#img");

button.addEventListener("click",()=>{
    let inputData = inputText.value
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${inputData}&size=150x150`)
    .then((data)=>{
        // console.log(data.url)
        img.setAttribute("src",data.url);
    })
    .catch((err)=>console.log(err))
    
})