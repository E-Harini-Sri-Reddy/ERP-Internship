let inp = document.querySelector('#inp');
let warning = document.getElementById('warning');
let qr = document.getElementById('qr');
const generate = document.getElementById('generate');

generate.addEventListener('click', () => {
    txt = inp.value;
    inp.value = ""
    warning.textContent = "";
    if (!txt.trim()) {
        warning.textContent = "Enter valid data";
        qr.src = "";

        setTimeout(() => {
            warning.textContent = "";
        }, 5000);
    } else {
        const size = "200x200";
        qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${txt}`
    }
})