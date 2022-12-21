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

btn_play.addEventListener('click',(e)=>
{
    play_musique()
});

btn_pause.addEventListener('click',(e)=>
{
    c_audio.pause();
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



