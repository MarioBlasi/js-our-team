/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede*/

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const team = [
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "/assets/img/angela-caroll-chief-editor.jpg",
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "/assets/img/angela-lopez-social-media-manager.jpg",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "/assets/img/barbara-ramos-graphic-designer.jpg",
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "/assets/img/scott-estrada-developer.jpg",
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "/assets/img/walter-gordon-office-manager.jpg",
  },
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "/assets/img/wayne-barnett-founder-ceo.jpg",
  },
];

const rowEl = document.querySelector(".row");
console.log(team);

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto*/

// team.forEach((member) => {
//   console.log(
//     `Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.photo}`
//   );
// });

/*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/

/*BONUS 1:
Trasformare la stringa foto in una immagine effettiva*/

/*BONUS 2:
Organizzare i singoli membri in card/schede*/

for (let i = 0; i < team.length; i++) {
  const thisteam = team[i];
  console.log(thisteam);
  const markup = `
  <div class="col">
        <div class="card">
            <img src="${thisteam.foto}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>${thisteam.nome}</h3>
                <p>${thisteam.ruolo}</p>  
            </div>
        </div>
   </div>`;
  rowEl.innerHTML += markup;
}
