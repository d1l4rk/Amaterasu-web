const buttonDownload = document.querySelector("#downloadPdf");
console.log(buttonDownload);
const data = `${window.location.origin}/cartilla.pdf`;
console.log(data);

// const blob = new Blob([data], { type: 'application/pdf' });

// const href = URL.createObjectURL(blob);



// document.body.appendChild(a);

buttonDownload.addEventListener( "click" , (e) => {
    e.preventDefault();
    download(data);
});


function download(pdfUrl) {
    fetch(pdfUrl).then(response => response.arrayBuffer()).then(resp => {
        const blob = new Blob([resp], { type: 'application/pdf' });
        const href = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), {
            href,
            style: 'display:none',
            download: 'amaterasu.pdf'
        });
        a.click();
        URL.revokeObjectURL(href);
        a.remove();
    })
}

