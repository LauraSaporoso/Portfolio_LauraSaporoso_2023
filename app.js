//   ANIMAZIONE INIZIO

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.3, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 0.7 }, "-=1");

//   PROGETTI

const arr = [
                    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-quiz-angular.png)",
        link: "https://angularquizapp.vercel.app/quiz-select",
        titolo: "Angular - Quiz app API",
        descrizione: "Applicazione quiz in Angular con uso di API. Realizzata in team di 2. #Lascaux.",
        linguaggi: "ANGULAR, HTML, CSS, TYPESCRIPT, API",
    },
                  {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-movie-api.png)",
        link: "https://643f9f0283fc96746ead308b--dainty-stroopwafel-1a1db4.netlify.app/",
        titolo: "Most Popular Movies on TMDB, API.",
        descrizione: "Lista dei 20 film più popolari su TMDB, titoli, locandine, trame e votazioni presi tramite API.",
        linguaggi: "HTML, CSS, JAVASCRIPT, API",
    },
         {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-pokemon.png)",
        link: "https://laurasaporoso.github.io/Pokedex-Pokemon-Javascript/",
        titolo: "Pokedex 150 Pokemon",
        descrizione: "Pokedex in Javascript con 150 Pokemon, utilizzata API per immagini, nome, id, gif avanti-dietro, info peso e altezza Pokemon",
        linguaggi: "HTML, CSS, JAVASCRIPT, API",
    },
         {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-weather.png)",
        link: "https://symphonious-chimera-92f623.netlify.app/",
        titolo: "Challenge Meteo API",
        descrizione: "Prova app meteo con API, regole: no video tutorial, solo google",
        linguaggi: "HTML, CSS, JAVASCRIPT, API",
    },
     {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-todo.png)",
        link: "https://laurasaporoso.github.io/To-Do-List-42-school/",
        titolo: "To Do List 42Firenze",
        descrizione: "Esercizio in Javascript, crea una To Do List.",
        linguaggi: "HTML, CSS, JAVASCRIPT, COOKIE",
    },
         {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-galley-js.png)",
        link: "https://laurasaporoso.github.io/Gallery-Challenge/",
        titolo: "Gallery Challenge",
        descrizione: "Gallery con scorrimento destra-sinistra attraverso click di frecce, scroll e drag. Immagini API.",
        linguaggi: "HTML, CSS, JAVASCRIPT, API",
    },
         {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-cinema.png)",
        link: "https://laurasaporoso.github.io/Cinema-movies-Challenge/",
        titolo: "Cinema challenge",
        descrizione: "Realizzazione prototipo per gestione di lista film di un cinema con 12 Sale. Al click si avranno più info. Tutto generato in JS.",
        linguaggi: "HTML, CSS, JAVASCRIPT",
    },
        {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-website22.png)",
        link: "https://laurasaporoso.github.io/sitolaurasaporoso",
        titolo: "Sito web 2022",
        descrizione: "Sito web portfolio del 2022. Scrittura del codice e design partiti da zero.",
        linguaggi: "HTML, CSS, JAVASCRIPT",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-baloon.png)",
        link: "https://laurasaporoso.github.io/Explode-this-baloon-42-school/",
        titolo: "Baloon 42Firenze",
        descrizione: "Esercizio in Javascript, eventi click(cambia colore) e leave(cambia colore al contrario), a 420 pixel esplode.",
        linguaggi: "HTML, CSS, JAVASCRIPT",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-facebook.png)",
        link: "https://clever-seahorse-dfca46.netlify.app",
        titolo: "Facebook Clone",
        descrizione: "Clone di Facebook solo in HTML CSS da zero",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-netflix.png)",
        link: "https://6423f22ce513dd7373fdb7ed--gleeful-pithivier-674a7e.netlify.app/",
        titolo: "Netflix Clone",
        descrizione: "Clone di netflix solo in HTML CSS da zero (max size Laptop normale)",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-loginsta.png)",
        link: "https://splendid-salamander-4988c2.netlify.app",
        titolo: "Instagram Login Clone",
        descrizione: "Clone di pagina login instagram",
        linguaggi: "HTML, CSS",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-duck.png)",
        link: "https://laurasaporoso.github.io/Dancing-Duck/",
        titolo: "Duck Javascript",
        descrizione: "Paperella che balla con musica",
        linguaggi: "HTML, CSS, JAVASCRIPT",
    },
    {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-lognet.png)",
        link: "https://comfy-trifle-beb4c4.netlify.app/",
        titolo: "Netflix Login Clone",
        descrizione: "Clone di pagina login Netflix",
        linguaggi: "HTML, CSS",
    },
 /*   {
        iconaProgetto: "images/icons/icon-project.png",
        background: "url(images/projects/bg-logamaz.png)",
        link: "",
        titolo: "Amazon Login Clone",
        descrizione: "Clone di pagina login Amazon",
        linguaggi: "HTML, CSS",
    },*/
];

arr.forEach((data) => {
    createBox(data);
});

function createBox(data) {

    let link = document.createElement("a");
    link.href = data.link;
    link.target = '_blank';
    document.getElementById("grid-row-js").appendChild(link);

    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.style.backgroundImage = data.background;
    link.appendChild(gridItem);

    let boxUp = document.createElement("div");
    boxUp.className = "box-up";
    gridItem.appendChild(boxUp);

    let icon = document.createElement("img");
    icon.src = data.iconaProgetto;
    icon.className = "icon-project";
    boxUp.appendChild(icon);

    let titolo = document.createElement("h3");
    titolo.className = "h3-title-js";
    titolo.textContent = data.titolo;
    boxUp.appendChild(titolo);

    let paragrafoUno = document.createElement("p");
    paragrafoUno.className = "paragraph-1-js";
    paragrafoUno.textContent = data.descrizione;
    boxUp.appendChild(paragrafoUno);

    let boxDown = document.createElement("div");
    boxDown.className = "box-down";
    gridItem.appendChild(boxDown);

    let paragrafoDue = document.createElement("p");
    paragrafoDue.className = "paragraph-2-js";
    paragrafoDue.textContent = data.linguaggi;
    boxDown.appendChild(paragrafoDue);

}
