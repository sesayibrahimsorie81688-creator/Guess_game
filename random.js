const won = document.getElementById(`won`);
const lost = document.getElementById(`lost`);


let r11 = 5;

let r22 = 7;

let r33 = 10;

document.getElementById(`btn`).onclick = function() {
    const rand = Math.floor(Math.random() * 10) + 1;
    document.getElementById(`num`).textContent = rand;
    const r1 = document.getElementById(`r1`);
    const r2 = document.getElementById(`r2`);
    const r3 = document.getElementById(`r3`);






    //document.getElementById(`num`).textContent = r1;
    if (!r1.checked && !r2.checked && !r3.checked) {

        won.textContent = `Please Check!!`;
        won.style.color = "red";

    } else if (r1.checked && rand < r11) {

        won.textContent = `You won!!`;
        won.style.color = "green";

    } else if (r2.checked && rand > r22) {

        won.textContent = `You won!!`;
        won.style.color = "green";

    } else if (r3.checked && rand === r33) {

        won.textContent = `You won!!`;
        won.style.color = "green";

    } else {

        won.textContent = `You lost !!`;
        won.style.color = "red";

    }




}
