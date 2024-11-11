function jamReload(){
    const now = new Date();
    const jam = now.getHours().toString().padStart(2,0);
    const menit = now.getMinutes().toString().padStart(2,0);
    const detik = now.getSeconds().toString().padStart(2,0);
    
    const displayJam = `${jam}:${menit}:${detik}`
    document.getElementById("clock").textContent = displayJam;
}

jamReload()
setInterval(jamReload, 1000);