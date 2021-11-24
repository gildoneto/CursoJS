# CONDIÇÕES

### CONDIÇÕES ANINHADAS

Podemos aninhas várias condicoes, uma dentro da outra.

```javascript
if(condição1) {
    // Bloco 1: executa se a condição1 for verdadeira
} else {
    if (condição2){
        // Bloco 2: executa se a condição1 for falsa e condição2 verdadeira, senão pula para o bloco else abaixo
    } else {
        // Bloco 3: executa se a condição2 for falsa. 
    }
}
```

### ELSE IF

Podemos usar o else if para simplificar condições aninhadas.

```javascript
if(condição1) {
    // Bloco 1: executa se a condição1 for verdadeira
} else if (condição2){
    // Bloco 2: executa se a condição1 for falsa e condição2 verdadeira, senão pula para o bloco else abaixo
} else {
    // Bloco 3: executa se a condição2 for falsa. 
}
```

### Condição Múltipla

Mais usada para valores fixos.

### SWITCH CASE

```javascript
switch (expressão) {
    case valor1:
        // caso a expressão tenha valor1, executa esse bloco, bate no break e sai do switch
        break
    case valor2:
        // caso a expressão tenha valor2, executa esse bloco, bate no break e sai do switch
        break
    case valor3:
        // caso a expressão tenha valor3, executa esse bloco, bate no break e sai do switch
        break
    dafault:
        // caso a expressão não tenha nenhum dos valores acima, executa esse bloco, bate no break e sai do switch
        break
}
```

### new Date()

A função getDay() do objeto Date, relaciona os dias da semana da seguinte forma:

- 0 = Domingo
- 1 = Segunda
- 2 = Terça
- 3 = Quarta
- 4 = Quinta
- 5 = Sexta
- 6 = Sábado