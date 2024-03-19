//your JS code here. If required.
const p = document.getElementById('timer');

setInterval(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based, so add 1
    const year = today.getFullYear();
    let hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    p.innerText = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${amPm}`;
}, 1000);

