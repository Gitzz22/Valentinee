function createFalling(){
    const container = document.getElementById("falling-container");

    setInterval(()=>{
        const item = document.createElement("div");
        item.classList.add("falling");

        const icons = ["❤","🌸","💐"];
        item.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        // WARNA RANDOM
        const colors = ["#ff4d6d","red","white","#ff8fab"];
        item.style.color = colors[Math.floor(Math.random()*colors.length)];

        item.style.left = Math.random()*100 + "vw";
        item.style.animationDuration = (Math.random()*4+3)+"s";

        container.appendChild(item);

        setTimeout(()=>{ item.remove(); },7000);
    },300);
}


createFalling();


// ANIMASI LOVE PECAH
const love = document.getElementById("mainLove");

if(love){
love.addEventListener("click", function(){

    const rect = love.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;

    for(let i=0;i<20;i++){
        const smallLove = document.createElement("div");
        smallLove.classList.add("pop-love");
        smallLove.innerHTML="❤";

        smallLove.style.left = centerX + "px";
        smallLove.style.top = centerY + "px";

        smallLove.style.setProperty('--x', Math.random());
        smallLove.style.setProperty('--y', Math.random());

        document.body.appendChild(smallLove);

        setTimeout(()=>smallLove.remove(),1000);
    }

    setTimeout(()=>{
        window.location.href="gallery.html";
    },800);

});
}

const photos = document.querySelectorAll(".gallery img");

photos.forEach(photo=>{
    photo.addEventListener("click", ()=>{

        photo.classList.add("active");
        setTimeout(()=>photo.classList.remove("active"),500);

        const rect = photo.getBoundingClientRect();

        // jumlah love
        for(let i=0;i<8;i++){

            const love = document.createElement("div");
            love.classList.add("photo-love");
            love.innerHTML="❤";

            // posisi acak di sekitar foto
            const offsetX = (Math.random()*rect.width) - rect.width/2;
            const offsetY = (Math.random()*rect.height) - rect.height/2;

            love.style.left = (rect.left + rect.width/2 + offsetX) + "px";
            love.style.top = (rect.top + rect.height/2 + offsetY) + "px";

            document.body.appendChild(love);

            setTimeout(()=>love.remove(),1000);
        }

    });
});


