// VARIABLE POUR LE BURGER MENU DE LA PLAYLIST
let btn_burger = document.querySelector('.burger_menu');
let div_playlist = document.querySelector('.playlist');
let btn_close = document.querySelector('.btn_close');

// FONCTION DE LA PLAYLIST 1 : AFFICHER L'ASIDE
btn_burger.addEventListener('click', (e) => {
    div_playlist.style.display = 'flex';
});
// FONCTION DE LA PLAYLIST 2 : ENLEVER L'ASIDE
btn_close.addEventListener('click', (e) => {
    div_playlist.style.display = 'none';
});
// LIGHT MODE DARK MODE


let btn_dark = document.querySelector('.icon_color_set');
let body_color = document.getElementById('body_color');
let titre_main = document.querySelectorAll('.titre');
let text_card = document.querySelectorAll('.text_card');
let footer = document.querySelector('.container_footer');
let texte_card_titre = document.querySelectorAll('.texte_card_titre')
let a = 0; 



// change la couleur du site (marche pas)
btn_dark.addEventListener('click', (e) => { 
    if (a==0) {{
        body_color.style.backgroundColor = '#ffff';
        titre_main.forEach(element => {
            element.style.color = '#2F195F';
        });
        text_card.forEach(element=>{
            element.style.color = '#2F195F';
        })
        texte_card_titre.forEach(element=>{
            element.style.color = '#2F195F';
        })

        footer.style.background = 'linear-gradient(180deg, rgba(187,135,255,10) 20%, rgba(83,60,113,1) 60%)';
        a++;
    }}else{
        body_color.style.backgroundColor = '#161616';

        titre_main.forEach(element => {
            element.style.color = '#966ECD';
        });

        text_card.forEach(element=>{
            element.style.color = '#ffff';
        })
        texte_card_titre.forEach(element=>{
            element.style.color = '#ddd9e3';
        });
        footer.style.background = 'linear-gradient(0deg, rgba(187, 135, 255, 1) 30%, rgba(47, 25, 95, 1) 70%, rgba(22, 22, 22, 1) 100%)';
        a = 0
    }
}
    )

// GESTION DE L'c_audio

// VARIABLE, CONST

// SELECTION DES BOUTONS
const btn_play = document.querySelector('.playeur_footer');
const btn_pause = document.querySelector('.btn_pause');
const btn_retour =document.querySelector('.playeur_footer_2');
const btn_stop= document.querySelector('.stop');
const btn_next= document.querySelector('.playeur_footer_revers');
const Titre_son = document.querySelector('.titre_text_footer');
const timer_son = document.querySelector('.time_text_footer');
const cover_footer = document.querySelector('.cover_footer');
const c_audio = document.querySelector('.audio');
const cover_none = document.querySelector('.cover_none')

// SELECTION DES MUSIQUES
const list = [
    {
        source:"../piste/Ateyaba - NEIT.mp3",
        nom: "ATEYABA - NEIT",
        image:"../image/single/ateyaba-vision.jpg"
    },

    {
        source:"../piste/Ateyaba - Neo (911).mp3",
        nom : "Ateyaba - Neo (911)",
        image:"../image/single/ateyaba-rockWithYou.jpg"
    },

    {
        source:"../piste/Damso - Aux Paradis.mp3",
        nom : "Damso - Aux Paradis",
        image:"../image/album/lithopedion-damso.jpg"
    },

    {
        source:"../piste/Kekra - Iverson (Clip Officiel).mp3",
        nom : "Kekra - Iverson (Clip Officiel)",
        image:"../image/single/iverson-kekra.jpg"
    },

    {
        source:"../piste/LA FÈVE - ERRR (prod. KOSEI).mp3",
        nom : "LA FÈVE - ERRR (prod. KOSEI)",
        image:"../image/album/ERR-LaFeve.jpg"
    },

    {
        source:"../piste/LAYLOW - MEGATRON.mp3",
        nom : "LAYLOW - MEGATRON",
        image:"../image/album/laylow-trinity.jpg"
    },
]

const list_deux = [
    {
        nom : "No Song",
        image : 'cover_none'
    }
]

// 


function play_musique() {
    c_audio.play();
}

// stop la musique
function pause_musique() {
    c_audio.pause();
}

function demar_musique(list) {
    Titre_son.textContent= list.nom;
    c_audio.src = list.source;
    cover_footer.src = list.image;
    c_audio.play()
}

function no_song() {
cover_none.list_deux;
c_audio.currentTime=0;
c_audio.pause()
clearInterval(interval);
Titre_son.textContent=list_deux.nom
}

btn_play.addEventListener('click',(e)=>
{
    play_musique();
    interval = setInterval((e)=>{
        musique_timer();
    }, 1000);
    cover_none.style.display='none'
    cover_footer.style.display='block'
});

btn_pause.addEventListener('click',(e)=>
{
    c_audio.pause();
    clearInterval(interval);
});

btn_stop.addEventListener("click", (e) => {
    no_song();
    cover_footer.style.display='none'
    cover_none.style.display='block';
    clearInterval(interval);
});



let i = 1;

demar_musique(list[0]);

function retour_musique(){
  i--;
  if (i<0) {
    i= list.length - 1;
  } 
  demar_musique(list[i]);
  play_musique();
}

btn_retour.addEventListener('click',retour_musique);

function next_musique(){
  i++;
  if (i>list.length-1) {
    i= 0;
  } 
  demar_musique(list[i]);
  play_musique();
}

btn_next.addEventListener('click',next_musique);

// INPUT RANGE VOLUME
let vol = document.querySelector("#vol");

vol.addEventListener('click', (e) => {
   c_audio.volume = vol.value/100; 
});

//INPUT RANGE TIME

let timer = document.querySelector('.time_text_footer')
let total_timer = document.querySelector('.total_time_text_footer')
let interval;


function musique_timer() {
    let time = c_audio.currentTime;

    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    if (seconds < 10) {
        timer.innerText = minutes + ":0" + seconds;
        time++;
    } else {
        timer.innerText = minutes + ":" + seconds;
        time++;
    }
};

timer.addEventListener('timeupdate', timer);


