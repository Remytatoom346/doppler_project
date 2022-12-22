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
let texte_card_titre = document.querySelectorAll('.texte_card_titre');
let a = 0;

// change la couleur du site (marche bof)
btn_dark.addEventListener('click', (e) => {
    if (a == 0) {
        {
            body_color.style.backgroundColor = '#ffff';
            titre_main.forEach((element) => {
                element.style.color = '#2F195F';
            });
            text_card.forEach((element) => {
                element.style.color = '#2F195F';
            });
            texte_card_titre.forEach((element) => {
                element.style.color = '#2F195F';
            });

            footer.style.background =
                'linear-gradient(180deg, rgba(187,135,255,10) 20%, rgba(83,60,113,1) 60%)';
            a++;
        }
    } else {
        body_color.style.backgroundColor = '#161616';

        titre_main.forEach((element) => {
            element.style.color = '#966ECD';
        });

        text_card.forEach((element) => {
            element.style.color = '#ffff';
        });
        texte_card_titre.forEach((element) => {
            element.style.color = '#ddd9e3';
        });
        footer.style.background =
            'linear-gradient(0deg, rgba(187, 135, 255, 1) 30%, rgba(47, 25, 95, 1) 70%, rgba(22, 22, 22, 1) 100%)';
        a = 0;
    }
});

// GESTION DE L'c_audio

// VARIABLE, CONST

// SELECTION DES BOUTONS
const btn_play = document.querySelector('.playeur_footer');
const btn_pause = document.querySelector('.btn_pause');
const btn_retour = document.querySelector('.playeur_footer_2');
const btn_stop = document.querySelector('.stop');
const btn_next = document.querySelector('.playeur_footer_revers');
const Titre_son = document.querySelector('.titre_text_footer');
const timer_son = document.querySelector('.time_text_footer');
const cover_footer = document.querySelector('.cover_footer');
const c_audio = document.querySelector('.audio');
const cover_none = document.querySelector('.cover_none');
const time_bar = document.getElementById('time_bar');
let timer = document.querySelector('.time_text_footer');
const total_timer = document.querySelector('.total_time_text_footer');
let interval;
let i = 1;

// SELECTION DES MUSIQUES
const list = [
    {
        source: '../piste/Ateyaba - NEIT.mp3',
        nom: 'ATEYABA - NEIT',
        image: '../image/single/ateyaba-vision.jpg',
        total_timer : '2 : 16'
    },

    {
        source: '../piste/Ateyaba - Neo (911).mp3',
        nom: 'Ateyaba - Neo (911)',
        image: '../image/single/ateyaba-rockWithYou.jpg',
        total_timer : '3 : 58'
    },

    {
        source: '../piste/Damso - Aux Paradis.mp3',
        nom: 'Damso - Aux Paradis',
        image: '../image/album/lithopedion-damso.jpg',
        total_timer : '2 : 49'
    },

    {
        source: '../piste/Kekra - Iverson (Clip Officiel).mp3',
        nom: 'Kekra - Iverson (Clip Officiel)',
        image: '../image/single/iverson-kekra.jpg',
        total_timer : '3 : 54'
    },

    {
        source: '../piste/LA FÈVE - ERRR (prod. KOSEI).mp3',
        nom: 'LA FÈVE - ERRR (prod. KOSEI)',
        image: '../image/album/ERR -LaFeve.jpg',
        total_timer : '2 : 28'
    },

    {
        source: '../piste/LAYLOW - MEGATRON.mp3',
        nom: 'LAYLOW - MEGATRON',
        image: '../image/album/laylow-trinity.jpg',
        total_timer : '3 : 37'
    },
];

const list_deux = [
    {
        nom: 'No Song',
        image: 'cover_none',
        total_timer : '0 : 00'
    },
];

// joue la musique
function play_musique() {
    c_audio.play();
}

// stop la musique
function pause_musique() {
    c_audio.pause();
}

// demare la musique
function demar_musique(list) {
    Titre_son.textContent = list.nom;
    c_audio.src = list.source;
    cover_footer.src = list.image;
    total_timer.textContent = list.total_timer

    c_audio.play();
}

// Lorsqu'il ny a pas de musique ou pour le btn stop
function stop_musique() {
    cover_none.list_deux;
    c_audio.currentTime = 0;
    total_timer.textContent = list_deux.total_timer
    c_audio.pause();
    clearInterval(interval);
    Titre_son.textContent = list_deux.nom;
}

// fonction pour retourner sur l'ancienne musique
function retour_musique() {
    i--;
    if (i < 0) {
        i = list.length - 1;
    }
    demar_musique(list[i]);
    play_musique();
}

// fonction pour skip a la prochaine musique
function next_musique() {
    i++;
    if (i > list.length - 1) {
        i = 0;
    }
    demar_musique(list[i]);
    play_musique();
}

// action du bouton play
btn_play.addEventListener('click', (e) => {
    play_musique();
    interval = setInterval((e) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

// action du bouton pause
btn_pause.addEventListener('click', (e) => {
    c_audio.pause();
    clearInterval(interval);
});

// action du bouton stop (marche bof)
btn_stop.addEventListener('click', (e) => {
    stop_musique();
    cover_footer.style.display = 'none';
    cover_none.style.display = 'block';
    clearInterval(interval);
});

// demare la 1er musique du tableau list
demar_musique(list[0]);


// btn retour = ancienne musique
btn_retour.addEventListener('click', retour_musique);

// btn next = prochaine musique
btn_next.addEventListener('click', next_musique);

// INPUT RANGE VOLUME
let vol = document.querySelector('#vol');

// gestion volume
vol.addEventListener('click', (e) => {
    c_audio.volume = vol.value / 100;
});

//INPUT RANGE TIME

// timer le la musique en cours
function musique_timer() {
    let time = c_audio.currentTime;

    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);
    if (seconds < 10) {
        timer.innerText = minutes + ' : 0' + seconds;
        time++;
    } else {
        timer.innerText = minutes + ' : ' + seconds;
        time++;
    }
}

timer.addEventListener('timeupdate', timer);

// range de la durée de la musique

c_audio.addEventListener('timeupdate', () => {
    time_bar.max = c_audio.duration;
    time_bar.value = c_audio.currentTime;
});

time_bar.addEventListener('click', () => {
    c_audio.currentTime = time_bar.value;
});

// ************************************************
// ************************************************
// ************************************************
// ************************************************
// ************************************************
// ************************************************

// TITRE FAV / ALBUM FAV / PLAYLIST

// card playlist
const card_playlist_une = document.getElementById("playlist1")
const card_playlist_deux = document.getElementById("playlist2")
const card_playlist_trois = document.getElementById("playlist3")
// card albums
const card_une = document.querySelector(".card_une");
const card_deux = document.querySelector(".card_deux");
const card_trois = document.querySelector(".card_trois");
const card_quatre = document.querySelector(".card_quatre");
// card titre
const card_titre = document.getElementById("titre1");
const card_titre_deux = document.getElementById("titre2");
const card_titre_trois = document.getElementById("titre3");
const card_titre_quatre = document.getElementById("titre4");
const card_titre_cinq = document.getElementById("titre5");
const card_titre_six = document.getElementById("titre6");

// joue la premiere musique en click sur la p1
card_playlist_une.addEventListener('click',(e) => {
    demar_musique(list[3]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

// card ablums

card_trois.addEventListener('click',(e) => {
    demar_musique(list[4]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

card_deux.addEventListener('click',(e) => {
    demar_musique(list[2]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

// card titre

card_titre.addEventListener('click',(e) => {
    demar_musique(list[1]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

card_titre_deux.addEventListener('click',(e) => {
    demar_musique(list[0]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

card_titre_quatre.addEventListener('click',(e) => {
    demar_musique(list[2]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

card_titre_cinq.addEventListener('click',(e) => {
    demar_musique(list[5]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});

card_titre_six.addEventListener('click',(e) => {
    demar_musique(list[3]);
    interval = setInterval((el) => {
        musique_timer();
    }, 1000);
    cover_none.style.display = 'none';
    cover_footer.style.display = 'block';
});








