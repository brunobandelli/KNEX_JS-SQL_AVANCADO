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

/*ORDERBY
database.select().table("games").orderBy("nome","asc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/*ASSOCIATED INSERTS
database.insert({
    nome: "RIOT",
    game_id: 14
}).table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/*INNERJOIN 1 PARA 1
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/

/* WHERE COM JOIN
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id",14).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
*/


/* 1 PARA M
database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    var estudioGamesArray = data;
    var game = {
        id: 0,
        nome: "",
        estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach(estudio => {
        game.estudios.push({nome: estudio.estudio_nome});
    })
    console.log(game)
}).catch(err => {
    console.log(err);
})
*/
/* M PARA M
database.select([
        "estudios.nome as estudio_nome",
        "games.nome as game_nome",
        "games.preco"
    ]).table("games_estudios")
    .innerJoin("games", "games.id", "games_estudios.game_id")
    .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
    .where("estudios.id", 11).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/*TRANSACTIONS
async function testeTransacao(){

    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Pyxerelia"}).table("estudios");
            await database.insert({nome: "Mojang"}).table("estudios");
            await database.insert({nome: "Gearbox"}).table("estudios")
        });
    }catch(err){
        console.log(err);
    }
}

testeTransacao();
*/