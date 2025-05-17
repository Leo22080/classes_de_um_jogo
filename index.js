class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }

}

let gobar = new Heroi("Gobar", 120, "guerreiro")
let jiraya = new Heroi("Jiraya", 41, "ninja")
let mordenkainen = new Heroi("Mordenkainen", 200, "mago")
let bodhidharma = new Heroi("Bodhidharma", 75, "monge")

let herois = [gobar, jiraya, mordenkainen, bodhidharma]

herois.forEach(heroi => {
    heroi.atacar()
})

