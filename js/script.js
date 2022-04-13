let img_ilust = document.getElementsByClassName("img_ilust")[0]
let btn_play = document.getElementsByClassName("btn_play-pause")[0]
let btn_back = document.getElementsByClassName("btn_back")[0]
let btn_forward = document.getElementsByClassName("btn_forward")[0]
let menu = document.getElementsByClassName("menu")[0]
let icon_menu = document.getElementsByClassName("icon_menu")[0]
let list_menu = document.getElementsByClassName("list_menu")[0]
let it_menu = document.querySelectorAll(".it_menu")
let music = document.getElementsByClassName("music")[0]
let progress_bar = document.getElementsByClassName("progress_bar")[0]
let list_music = [
    {
        img:"./assets/images/forever-in-reverse.PNG",
        src:"./assets/music/Forever in Reverse.mp4"
    },
    {
        img:"./assets/images/pure-force.PNG",
        src:"./assets/music/A Pure Force.mp4"
    },
    {
        img:"./assets/images/back-to-seattle.PNG",
        src:"./assets/music/Back to Seattle.mp4"
    },
    {
        img:"./assets/images/stuck-in-apocaliptic-vision.PNG",
        src:"./assets/music/Stuck In The Apocalyptic Vision.mp4"
    },
    {
        img:"./assets/images/timelord.PNG",
        src:"./assets/music/Timelord.mp4"
    }
]

for(let i=0; i< it_menu.length; i++){
    it_menu[i].addEventListener("click", function(e){
        console.log(e.target.innerHTML)
        img_ilust.setAttribute("src",list_music[i].img)
        music.setAttribute("src",list_music[i].src)
    })
}

// Menu Retratil
icon_menu.addEventListener("click",()=>{
    let sts = icon_menu.getAttribute("status")
    if (sts == "open"){
        icon_menu.setAttribute("src","./assets/images/icon_menu.png")
        icon_menu.setAttribute("status","close")
        menu.style.width = "50px"
        menu.style.height = "45px"
        list_menu.style.transition = "0ms"
        list_menu.style.opacity = "0%"
    }
    if(sts == "close"){
        icon_menu.setAttribute("src","./assets/images/icon_menu_x.png")
        icon_menu.setAttribute("status","open")
        menu.style.width = "350px"
        menu.style.height = "550px"
        list_menu.style.transition = "1000ms"
        list_menu.style.opacity = "100%"
    }
})

// Sincronizacao da progress_bar com o currentTime da musica
music.addEventListener("timeupdate", (e)=>{
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progress_width = (currentTime/duration)*100;
    progress_bar.style.width = progress_width+"%";
})

// Botao play/pause
btn_play.addEventListener("click", () =>{
    sts = btn_play.getAttribute("status")
    if (sts == "pause"){
        btn_play.setAttribute("src", "./assets/images/pause-branco.png")
        btn_play.setAttribute("status", "play")
        music.play()
    }
    if (sts == "play"){
        btn_play.setAttribute("src", "./assets/images/play-branco.png")
        btn_play.setAttribute("status", "pause")
        music.pause()
    }
})

// Botao back
btn_back.addEventListener("click", ()=>{
    music.currentTime -= 10;
})

// Botao forward
btn_forward.addEventListener("click", ()=>{
    music.currentTime += 10;
})