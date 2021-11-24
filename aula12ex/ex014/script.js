function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let elementos = document.querySelectorAll(".texto")

    let data = new Date()
    let hora = data.getHours()

    hora = 14

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // morning
        img.src = "fotomanha.png"
        document.body.style.background = "#ece6da"
        for (let i in elementos){
           elementos[i].style.color = "black"
        }
    } else if (hora >= 12 && hora <= 18) {
        // afternoon
        img.src = "fototarde.png"
        document.body.style.background = "#f6b00b"
        for (let i in elementos){
            elementos[i].style.color = "black"
         }
    } else {
        //night
        img.src = "fotonoite.png"
        document.body.style.background = "#037076"
    }
}
