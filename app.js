function GenerateQR() {
    const qrText = document.querySelector("input").value.trim();

    if(!qrText) return alert("enter valid Text or URL");

    const Image = document.querySelector("img");
    Image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;

let downloadBtn=document.querySelector("#download");
let Download = document.querySelector("a");
Download.href="`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`";
downloadBtn.style.display = "inline-block";

}

function modeChange(){
    document.body.classList.toggle("dark");
}
