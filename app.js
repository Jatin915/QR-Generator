function GenerateQR() {
    const input = document.querySelector("#qrText");
    const qrText = input.value.trim();

    // Prevent QR generation for empty input
    if (!qrText) {
        alert("Enter valid Text or URL");
        return;
    }

    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=200x200`;

    const image = document.querySelector("img");
    const downloadBtn = document.querySelector("#download");
    const downloadLink = document.querySelector("a");

    image.src = qrURL;
    downloadLink.href = qrURL;
    downloadBtn.style.display = "inline-block";
}

function modeChange(){
    document.body.classList.toggle("dark");
}
