function GenerateQR() {
    const qrText = document.querySelector("input").value.trim();

    if(!qrText){
        alert("enter valid Text or URL");
        return;
    }
    
    const Image = document.querySelector("img");
    Image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;
}