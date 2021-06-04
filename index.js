var database = require("./database")

/* INSERT
var dados = [
    {
        nome: "YU-GI-OH",
        preco: 30.20
    },
    {
        nome: "Digimon",
        preco: 15.99
    },
    {
        nome: "Pokemon",
        preco: 17.90
    }
]

database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
});
*/

/*SELECT
database.select(["id","preco"]).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/


database.insert({nome: "Beyblade", preco: 30}).into("games").then(data => {
    database.select(["id","preco"]).table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err);
});
