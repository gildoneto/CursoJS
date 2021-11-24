let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 0 && hora <= 4 && typeof hora == 'number') {
    console.log('Boa Madrugada!')
} else if (hora >= 5 && hora <=11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Hora inválida!')
}