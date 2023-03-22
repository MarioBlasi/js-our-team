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
    ruolo: "chief",
    img: "",
  },
  {
    nome: "Angela Lopez",
    ruolo: "social media manager",
    img: "",
  },
  {
    nome: "Barbara Ramos",
    ruolo: "graphic designer",
    img: "",
  },
  {
    nome: "Scott Estrada",
    ruolo: "developer",
    img: "",
  },
  {
    nome: "Walter Gordon",
    ruolo: "office manager",
    img: "",
  },
  {
    nome: "Wayne Barnett",
    ruolo: "founder & ceo",
    img: "",
  },
];

const rowEl = document.querySelector(".row");
console.log(team);

/*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto*/

for (let i = 0; i < team.length; i++) {
  const thisteam = team[i];
  console.log(thisteam);
  const markup = `
  <div class="col">
        <div class="card">
            <img src="${thisteam.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h3>
                    ${thisteam.nome} 
                </h3>
                <p>
                    ${thisteam.ruolo}
                </p>
            </div>
        </div>
   </div>`;
  rowEl.innerHTML += markup;
}
