let n1 = 3423.4

n1.toFixed(2).replace('.',',')

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))