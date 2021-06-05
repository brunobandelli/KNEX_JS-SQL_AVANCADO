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

/*NESTED QUERYS
database.insert({nome: "Beyblade", preco: 30}).into("games").then(data => {
    database.select(["id","preco"]).table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err);
});
*/

/*WHERE
var query = database.select()
    .whereRaw("nome = 'Beyblade' OR preco > 20")
    .table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    });
*/


/*RAW
database.raw("SELECT * FROM games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*DELETE
database.where({id: 34}).delete().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*UPDATE
database.where({id: 32}).update({preco: 10}).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

