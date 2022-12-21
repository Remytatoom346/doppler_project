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

// GESTION DE L'AUDIO

// VARIABLE, CONST

// SELECTION DES BOUTONS
const btn_play = document.querySelector('.playeur_footer');
const btn_stop = document.querySelector('.btn_pause');
const btn_retour =document.querySelector('.playeur_footer_2');
const btn_repeat= document.querySelector('.repeat');
const btn_next= document.querySelector('.playeur_footer_revers');
const Titre_son = document.querySelector('.titre_text_footer');
const timer_son = document.querySelector('.time_text_footer');
const cover_titre = document.querySelector('.cover_footer');
const audio = document.querySelector('.audio');

// SELECTION DES MUSIQUES
const list = [
    {
        source:"../piste/Ateyaba - NEIT.mp3",
        nom: "ATEYABA - NEIT"
    },

    {
        source:"../piste/Ateyaba - Neo (911).mp3",
        nom : "Ateyaba - Neo (911)"
    },

    {
        source:"../piste/Damso - Aux Paradis.mp3",
        nom : "Damso - Aux Paradis"
    },

    {
        source:"../piste/Kekra - Iverson (Clip Officiel).mp3",
        nom : "Kekra - Iverson (Clip Officiel)"
    },

    {
        source:"../piste/LA FÈVE - ERRR (prod. KOSEI).mp3",
        nom : "LA FÈVE - ERRR (prod. KOSEI)"
    },

    {
        source:"../piste/LAYLOW - MEGATRON.mp3",
        nom : "LAYLOW - MEGATRON"
    },
]

// 

let musique_play = false;
// lancer la musique
function play_musique() {
    musique_play = true;
    audio.play();
    btn_play.classList.add('active');
}
// stop la musique
function pause_musique() {
    musique_play = false;
    audio.play();
    btn_stop.classList.remove('active');
    console.log(pause_musique());
}


btn_play.addEventListener('click',()=>musique_play ? pause_musique(): play_musique());

function demar_musique(list) {
    Titre_son.textContent= list.nom;
    audio.src = list.source;
}

let i = 1

demar_musique(list[i]);

function retour_musique(){
  i--;
  if (i<0) {
    i= list.length - 1;
  } 
  demar_musique(list[i]);
  play_musique();
  console.log(retour_musique());
}

btn_retour.addEventListener('click',retour_musique());

console.log(audio.src());


