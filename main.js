/*var token;
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let url = `http://localhost:8080/api/utente/login?username=` + username + `&password=` + password;
    let promiseLogIn = fetch(url, { mode: 'no-cors' });
    promiseLogIn.then((response) => {
        token = response;
        console.log(token);
    })
}*/

function stampaArticoli() {
    let stampa = "";
    let listaArticoli = [];
    let name = document.getElementById("nomeArticolo").value;
    let codeArt = document.getElementById("idArticolo").value;
    let url = `http://localhost:8080/api/articolo/trova-articoli?name=` + name + `&codiceArticolo=` + codeArt;
    fetch(url).then((resp) => {
        resp.json().then((listaDati) => {
            for (let dato of listaDati) {
                let articolo = {
                    id: dato.codiceArticolo,
                    nome: dato.nomeArticolo,
                    disponibilta: dato.disponibilita,
                };
                listaArticoli.push(articolo);
                stampa += `<div class="card col-md-4 border-0 mt-2 text-center">` + articolo.id + `</br>` +
                    articolo.nome + `</br>` + articolo.disponibilta + `</div>`;
            }
            document.getElementById("Articoli").innerHTML = stampa;
            console.log(resp);
        });

    })
}