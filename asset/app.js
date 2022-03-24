/*
Per la pagina 'Chi siamo' del nostro sito aziendale, dobbiamo sviluppare la sezione "Il nostro team".
Definiamo un array di oggetti che rappresentano i membri del team. 
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1: stampare in console l'elenco dei membri del team,
 scrivendo separatamente i dettagli di ciascun componente.
Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico,
 creando per ciascun membro del team un elemento che conterrà i suoi dati.
BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.
Consigli del giorno:
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Cosa conterrà il campo che rappresenta la foto in ciascun oggetto?
Come possiamo fare per trasformarla in effettiva immagine visibile nell'html ?
*/

//inizializzo l'array con i dati del team
let team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'barbara-ramos-graphic-designer.jpg'
    }
]

//Milestone 1: stampare in console l'elenco dei membri del team,
//scrivendo separatamente i dettagli di ciascun componente.
//ciclo for per muovermi in ogni position dell'array
for (let i = 0; i < team.length; i++) {
    //ciclo for in che guarda ogni 'chiave' nell'oggetto i (che dipende dal for) 
    for (const key in team[i]) {
        console.log(`${key} -> ${team[i][key]}`)
    }  
}

//Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico,
//creando per ciascun membro del team un elemento che conterrà i suoi dati.
//target in html
let test = document.getElementById('test');
//ripeto ciclo ma invece di console.log, stampo in html 
for (let i = 0; i < team.length; i++) {
    //ciclo for in che guarda ogni 'chiave' nell'oggetto i (che dipende dal for) 
    for (const key in team[i]) {
        test.innerHTML += (`<div> ${key} -> ${team[i][key]} </div>`);
    }  
}