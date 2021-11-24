function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById("txtano")
    let res = document.querySelector("div#res")

    if (formAno.value == 0 || formAno.value > ano) {
        alert('[ERRO] Verifique o dado digitado e tente novamente!')
    } else {
        let formSex = document.getElementsByName("radsex")
        let idade = ano - Number(formAno.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //young
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // elderly
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Child
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //young
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adult
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // elderly
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}